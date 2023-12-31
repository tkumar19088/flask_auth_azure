import pyodbc
from dotenv import load_dotenv
import os
from flask import jsonify
from azure.storage.blob import BlobServiceClient
import io
import pandas as pd
import json
import ast
import pulp
import numpy as np
import pandas as pd

load_dotenv()

# ************************** USER DATA READER CLASS ****************************
#
#  Contains functions to read user data from SQL Server and Azure Blob Storage
#
# ******************************************************************************
class UserDataReaderSQLStorage:
    def __init__(self,) -> None:
        """
        The above function initializes a database connection using environment variables for server,
        database, username, password, and driver.
        """
        server = os.getenv("SERVER")
        database = os.getenv("DATABASE")
        dbusername = os.getenv("DBUSERNAME")
        password = os.getenv("PASSWORD")
        driver = os.getenv("DRIVER")

        # Build connection string
        self.conn = pyodbc.connect(
            f'DRIVER={driver};'
            f'SERVER={server};'
            f'DATABASE={database};'
            f'UID={dbusername};'
            f'PWD={password}'
        )
        self.cur= self.conn.cursor()

    def fetch_user_details(self, uname):
        """
        The function fetches user details from a database based on the provided username.

        :param uname: The `uname` parameter is a string that represents the username of the user whose
        details you want to fetch from the `UsersTable` in the database
        :return: The fetch_user_details function returns the details of a user from the UsersTable based
        on the provided username.
        """
        query = f"SELECT * FROM UsersTable WHERE UserName = '{uname}'"
        self.cur.execute(query)
        return self.cur.fetchone()

    def get_user_details(self, uname):
        """
        Retrieves user details from the database based on the provided username.

        :param user_name: Username of the user whose details you want to retrieve.
        :return: A dictionary containing user details or a JSON error response.
        """
        try:
            user_details = self.fetch_user_details(uname)
            if user_details:
                return {
                    "name": user_details[1],
                    "email": user_details[2],
                    "country": user_details[3],
                    "role": user_details[4],
                }
        except Exception as e:
            return jsonify({"error": str(e)}), 500


class UserDataReaderBlobStorage:
    def __init__(self):
        connection_string = os.getenv("azure_connection_string")
        self.blob_service_client = BlobServiceClient.from_connection_string(connection_string) # type: ignore

    def buildclient(self, blob_name=None):
        """
        The function `_buildclient` takes a container name and blob name as input, retrieves the blob
        client, downloads the blob data into a stream, and returns the stream.

        :param container_name: The container_name parameter is the name of the container where the blob
        is stored. A container is a logical grouping of blobs within a storage account
        :param blob_name: The `blob_name` parameter is the name of the blob that you want to retrieve
        from the Azure Blob Storage container
        :return: a stream object that contains the data from the specified blob in the specified
        container.
        """
        # Get container name
        blobcontainer = os.getenv("container_name")

        # Get blob client
        blob_container_client = self.blob_service_client.get_container_client(blobcontainer) # type: ignore
        blob_client = blob_container_client.get_blob_client(blob=blob_name) # type: ignore

        # Build stream for data from blob
        stream_downloader = blob_client.download_blob()
        stream = io.BytesIO()
        stream_downloader.readinto(stream)
        return stream

    def fetch_user_excel(self, blob_name=None):
        """
        The function reads an Excel file from a blob storage container and returns a pandas DataFrame.

        :param container_name: The container_name parameter is the name of the container where the Excel
        file is stored
        :param blob_name: The `blob_name` parameter is the name of the blob file that you want to read
        from. It is the name of the file stored in the container specified by the `container_name`
        parameter
        :return: a table object that is created by reading an Excel file from a blob storage container.
        """
        # Get blob client
        stream = self.buildclient(blob_name)
        return pd.read_excel(stream)
    
    def getUserDetails(self, uemail):
        """
        The function fetches user details from a database based on the provided username.

        :param uname: The `uname` parameter is a string that represents the username of the user whose
        details you want to fetch from the `UsersTable` in the database
        :return: The fetch_user_details function returns the details of a user from the UsersTable based
        on the provided username.
        """
        self.res={}
        usersdata = self.fetch_user_excel("users.xlsx")
        user_details = usersdata[usersdata["Email"] == uemail]
        if len(user_details) > 0:
            try:
                self.res = json.loads(user_details.to_json(orient='records'))[0]
                self.res['Location'] = ast.literal_eval(self.res['Location'])
                self.res['Business Unit'] = ast.literal_eval(self.res['Business Unit'])
                self.res['Customer'] = ast.literal_eval(self.res['Customer'])
                self.res['Brand'] = ast.literal_eval(self.res['Brand'])
                # return json.loads(self.res.to_json(orient='records'))[0]
                return self.res
            except Exception as e:
                return jsonify({"error": str(e)}), 500
        else:
            return jsonify({"error": "User not found"}, 404)

# ************************** AZURE BLOB READER CLASS ***************************
#
#     Contains functions to read excel / csv files from Azure Blob Storage
#
# ******************************************************************************
class AzureBlobReader:
    def __init__(self):
        connection_string = os.getenv("azure_connection_string")
        self.blob_service_client = BlobServiceClient.from_connection_string(connection_string) # type: ignore

    def buildclient(self, blob_name=None):
        """
        The function `buildclient` takes a blob name as input, retrieves the container name from an
        environment variable, and returns a stream of data from the specified blob.

        :param blob_name: The `blob_name` parameter is the name of the blob that you want to download
        from the Azure Blob Storage container
        :return: a stream object that contains the data from the specified blob.
        """
        # Get container name
        blobcontainer = os.getenv("container_name")

        # Get blob client
        blob_container_client = self.blob_service_client.get_container_client(blobcontainer) # type: ignore
        blob_client = blob_container_client.get_blob_client(blob_name) # type: ignore

        # Build stream for data from blob
        stream_downloader = blob_client.download_blob()
        return stream_downloader

    def read_xls(self, blob_name=None, sheet=None):
        """
        The function reads an Excel file from a blob storage and returns the data as a pandas DataFrame.

        :param blob_name: The parameter "blob_name" is the name of the blob file that you want to read.
        It is used to identify the specific blob file that you want to read data from
        :return: a pandas DataFrame object that is created by reading an Excel file.
        """
        # Get blob client
        stream_downloader = self.buildclient(blob_name)
        stream = io.BytesIO()
        stream_downloader.readinto(stream)
        return pd.read_excel(stream, sheet_name=sheet)

    def read_csvfile(self, blob_name=None):
        """
        The function reads a CSV file from a blob storage and returns the data as a pandas DataFrame.

        :param blob_name: The `blob_name` parameter is the name of the blob file that you want to read.
        It is used to identify the specific blob file that you want to retrieve and read as a CSV file
        :return: a pandas DataFrame object that contains the data read from the CSV file.
        """
        # Get blob client
        stream_downloader = self.buildclient(blob_name)
        blob_content = stream_downloader.content_as_bytes()
        csv_data = io.StringIO(blob_content.decode('utf-8'))
        return pd.read_csv(csv_data)

# ************************** ALERTS MANAGER CLASS ******************************
#
#  Contains functions to generate OOS and Irregular PO alerts for the dashboard
#
# ******************************************************************************
class AlertsManager:
    def __init__(self,global_filters, global_user):
        self.alerts = []
        self.global_filters = global_filters or {}
        self.global_user = global_user or {}

    def filter_data(self, df, filter_keys):
        for key in filter_keys:
            if key in self.global_user:
                df = df[df[key].isin(self.global_user[key])]
            if self.global_filters != {} and key in self.global_filters:
                df = df[df[key]==(self.global_filters[key])]
        return df.reset_index(drop=True)

    def get_sorted_data(self, data, sort_column):
        return data.groupby(['Business Unit', 'Location', 'Brand']).apply(
            lambda x: x.sort_values([sort_column], ascending=True)
        ).reset_index(drop=True)

    def generate_oos_alerts(self):
        filters = ['Business Unit', 'Location', 'Brand']
        oos_data = AzureBlobReader().read_csvfile("ui_data/currentalertsoos.csv")#, self.global_filters, self.global_user)
        oosalertsdata = AlertsManager(self.global_filters, self.global_user).filter_data(oos_data, filters)
        if len(oosalertsdata) > 0:
            sorted_oos = self.get_sorted_data(oosalertsdata, 'Reckitt WOC')
            for name, group in sorted_oos.groupby(['Location', 'Brand']):
                alert = {
                    'Title': f"OOS Risk Detected on {name[1]} {name[0]} SKUs",
                    'DATA': group[["Description", "Service CW"]].head(3).to_dict('records')
                }
                self.alerts.append(alert)


    def generate_irrpo_alerts(self):
        filters = ['Business Unit', 'Customer', 'Location', 'Brand']
        irrpo_data = AzureBlobReader().read_csvfile("ui_data/currentalertsirrpo.csv")#, self.global_filters, self.global_user)
        irrpoalertsdata= AlertsManager(self.global_filters, self.global_user).filter_data(irrpo_data, filters)
        if len(irrpoalertsdata) > 0:
            sorted_irrpo = self.get_sorted_data(irrpoalertsdata, 'Num Irregular SKUs')
            for name, group in sorted_irrpo.groupby(['Location', 'Brand']):
                alert = {
                    'Title': f"Irregular PO Detected for {name[1]} {name[0]} SKUs",
                    'DATA': group[["PO Number", "PO Date"]].head(3).to_dict('records')
                }
                self.alerts.append(alert)


    def refine_alerts(self):
        for alert in self.alerts:
            for data in alert["DATA"]:
                data["Name"] = data.pop("Description", data.pop("PO Number", None))
                data["Value"] = data.pop("Service CW", data.pop("PO Date", None))


    def get_alerts(self):
        self.generate_oos_alerts()
        self.generate_irrpo_alerts()
        self.refine_alerts()
        return self.alerts

# ************************** MITIGATION # 1 REALLOCATION BY RETAILER ****************************
#
#       Contains functions to optimize reallocation of supply for alternate retailers
#
# # *********************************************************************************************
class ReallocationOptimizer:
    def __init__(self, df):
        self.df = df
        self.num_rows = len(df)
        self.problem = pulp.LpProblem("Optimization_Problem", pulp.LpMinimize)
        self.X_vars = {}
        self.aux_vars = {}

    @staticmethod
    def get_data_dict():
        return {
            0: 'Customer',#
            1: 'Channel',#
            2: 'sif-atf',#
            3: 'currentallocation',#
            4: 'allocationconsumed',#
            5: 'openorders',#
            6: 'custsoh-target',#
            7: 'custwoc-target',#
            8: 'cmuscore',#
            9: 'sumofPOsinalloccycle',#
            10: 'currentcustSOH',#
            11: 'Sell out'#
        }

    @staticmethod
    def get_var_dict():
        return {
            0: 'remainingallocation',#
            1: 'expectedservicelevel',#
            2: 'custsoh-current',#
            3: 'custwoc-current',#
            4: 'stocksafetoreallocate',#
            5: 'idealallocationvalues'#
        }

    def initiate_variables(self):
        X_0 = pulp.LpVariable("X_0", lowBound=0)
        data_dict = self.get_data_dict()

        # Variables to define in the data
        self.X_vars = {}

        # Auxiliary variables to apply constraints
        self.aux_vars = {}

        # Initiate variables
        for i in range(self.num_rows):
            self.X_vars[i] = {}
            self.aux_vars[i] = {}

            # Variables
            # Remaining allocation
            self.X_vars[i][0] = pulp.LpVariable(f"X_var_{i}_0", lowBound=0)

            # Expected weekly service level
            self.X_vars[i][1] = pulp.LpVariable(f"X_var_{i}_1", lowBound=0)

            # Updated customer SOH
            self.X_vars[i][2] = pulp.LpVariable(f"X_var_{i}_2", lowBound=0)

            # Updated customer WOC
            self.X_vars[i][3] = pulp.LpVariable(f"X_var_{i}_3", lowBound=0)

            # SOH safe to reallocate
            self.X_vars[i][4] = pulp.LpVariable(f"X_var_{i}_4", lowBound=0)

            # Suggested supply - No lower bound for the suggested supply
            self.X_vars[i][5] = pulp.LpVariable(f"X_var_{i}_5", lowBound=None)

            # Initiate auxiliary variables
            # Auxiliary variables - Expected weekly service level
            self.aux_vars[i][1] = pulp.LpVariable(f"aux_var_{i}_1_", lowBound=None)

            # Auxiliary variables - Updated customer SOH
            self.aux_vars[i][2] = pulp.LpVariable(f"aux_var_{i}_2", lowBound=None)

            # Auxiliary variables - SOH safe to reallocate
            self.aux_vars[i][4] = pulp.LpVariable(f"aux_var_{i}_4", lowBound=None)
        return X_0

    def add_constraints(self, X_0, WOC_MIN, WOC_MAX, MINIMUM_SERVICE_LEVEL):
        data_dict = self.get_data_dict()
        for i in range(self.num_rows):
            # print(f"\nself.problem += self.X_vars[i][0] == self.df[data_dict[3]][i] - self.df[data_dict[4]][i] + self.X_vars[i][5]:\n\n'{self.problem} += {self.X_vars[i][0]} == {self.df[data_dict[3]][i]} - {self.df[data_dict[4]][i]} + {self.X_vars[i][5]}'")
            self.problem += self.X_vars[i][0] == self.df[data_dict[3]][i] - self.df[data_dict[4]][i] + self.X_vars[i][5]

            # Expected SOH considers both current stock and potential change in allocation
            self.problem += self.X_vars[i][2] == self.df[data_dict[10]][i] - self.df[data_dict[11]][i] + self.df[data_dict[4]][i] + self.X_vars[i][0] + self.X_vars[i][5] - self.df[data_dict[5]][i]
            self.problem += self.X_vars[i][2] >= 0

            # Apply thresholds for weeks of coverage
            self.problem += self.X_vars[i][3] >= WOC_MIN[i]
            self.problem += self.X_vars[i][3] <= WOC_MAX[i]
            self.problem += self.X_vars[i][2] == self.X_vars[i][3] * self.df[data_dict[11]][i]
            self.problem += self.aux_vars[i][2] >= self.X_vars[i][0] - self.df[data_dict[5]][i]
            self.problem += self.aux_vars[i][2] >= 0
            self.problem += self.X_vars[i][4] == self.aux_vars[i][2]
            self.problem += self.aux_vars[i][4] >= self.X_vars[i][0] - max(self.df[data_dict[2]][i] - self.df[data_dict[9]][i], self.df[data_dict[5]][i])
            self.problem += self.aux_vars[i][4] >= 0
            self.problem += self.X_vars[i][4] == self.aux_vars[i][4]

            # Expected service level considers both current allocation and potential change in allocation
            self.problem += self.aux_vars[i][1] <= (self.df[data_dict[3]][i] + self.X_vars[i][5]) / max(self.df[data_dict[2]][i], self.df[data_dict[9]][i] + self.df[data_dict[5]][i])
            self.problem += self.aux_vars[i][1] <= 1
            self.problem += self.aux_vars[i][1] >= MINIMUM_SERVICE_LEVEL
            self.problem += self.X_vars[i][1] == self.aux_vars[i][1]

            # Suggested supply should be below SOH safe to reallocate
            self.problem += self.X_vars[i][5] <= self.X_vars[i][4]

            # Suggested supply cannot be greater than current allocation
            self.problem += self.X_vars[i][5] <= self.df[data_dict[3]][i]

        # Trying to minimise 1 - service level <--> maximise service level
        self.problem += X_0 == self.num_rows - pulp.lpSum([self.X_vars[i][1] for i in range(self.num_rows)])

        # Sum of suggested reallocation equals to 0 since it is a closed system
        self.problem += pulp.lpSum([self.X_vars[i][5] for i in range(self.num_rows)]) == 0

    def optimize(self, MINIMUM_SERVICE_LEVEL, WOC_MIN_PCT, WOC_MAX_PCT):
        try:
            data_dict = self.get_data_dict()
            var_dict = self.get_var_dict()

            WOC_MIN = self.df[data_dict[7]] * WOC_MIN_PCT
            WOC_MAX = self.df[data_dict[7]] * WOC_MAX_PCT

            X_0 = self.initiate_variables()
            self.problem += X_0
            self.add_constraints(X_0, WOC_MIN, WOC_MAX, MINIMUM_SERVICE_LEVEL)
            self.problem.solve()

            status = pulp.LpStatus[self.problem.status]
            arr = np.zeros((self.num_rows, len(var_dict.keys())))
            for k1 in self.X_vars.keys():
                for k2, v in self.X_vars[k1].items():
                    arr[k1, k2] = v.varValue
            df_res = pd.DataFrame(np.round(arr, 4), columns=var_dict.values())
            constraints = [{
                            'Name': 'PCT DEVIATION FROM INIT ALLOC',
                            'Value': '5%',
                            'Label': 0
                        }, {
                            'Name': 'MIN Expected Service Level',
                            'Value': f'{MINIMUM_SERVICE_LEVEL}',
                            'Label': 1
                        }, {
                            'Name': 'MIN Deviation from Target WOC',
                            'Value': f'{WOC_MIN}',
                            'Label': 0
                        }, {
                            'Name': 'MAX Deviation from Target WOC',
                            'Value': f'{WOC_MAX}',
                            'Label': 0
                        }]
            return constraints, status, df_res
        except Exception as e:
            return [], str(e), pd.DataFrame()

# Run Optimization model
# Return Constraints, Results and dataframe for alternate retailers
def optimise_supply(df, MINIMUM_SERVICE_LEVEL=0.7, WOC_MIN_PCT=0, WOC_MAX_PCT=10):
    optimizer = ReallocationOptimizer(df)
    constraints, status, result_df = optimizer.optimize(MINIMUM_SERVICE_LEVEL, WOC_MIN_PCT, WOC_MAX_PCT)
    return constraints, status, result_df

# ************************** MITIGATION # 2 PUSH ALTERNATIVE SKU  *****************************
#
# Contains two classes
#
# 1. SKUManager:
#           Contains functions to fetch the data and use the AlternativeSKUsCalculator class
#           to calculate alternative SKUs for a given RB SKU
#
# 2. AlternativeSKUsCalculator:
#           Contains functions to calculate alternative SKUs for a given RB SKU
#
# *********************************************************************************************
class SKUManager:
    def __init__(self, global_config, request_data):
        self.global_user = global_config.get('global_user', {})
        self.global_filters = global_config.get('global_filters', {})
        self.request_data = request_data

    def get_alternative_skus(self):
        if not self.request_data:
            return self._error_response("Missing required parameter: RB SKU!")

        customer, sku_r = self.global_filters.get('Customer'), self.request_data.get('rbsku')
        if not customer:
            return self._error_response("No customer selected!")

        try:
            df_price = AzureBlobReader().read_csvfile("ui_data/df_price.csv")
            alternative_skus_calculator = AlternativeSKUsCalculator(df_price, sku_r, customer)
            alternative_skus = alternative_skus_calculator.calculate()
            alternative_skus = alternative_skus[alternative_skus['score_final'] > .50]
            altskus_sorted = alternative_skus.sort_values(by='score_final', ascending=False).head(5) # type: ignore
            altskus_sorted['skuid'] = altskus_sorted.index

            bensfile = AzureBlobReader().read_csvfile("ui_data/alternative_sku_template.csv")

            merged = bensfile.merge(altskus_sorted, left_on='RB SKU', right_on='skuid', how='inner')
            rename_cols = {
                            'score_final': 'recom-score',
                        }
            merged = merged.rename(columns=rename_cols)
            merged.sort_values(by='recom-score', ascending=False, inplace=True)
            merged = replace_missing_values(merged)

            return json.loads(merged.to_json(orient='records')) if not merged.empty else self._error_response("No alternative SKUs found!")
        except Exception as e:
            return self._error_response(str(e))

    def _error_response(self, message):
        return jsonify(status="error", message=message), 500


class AlternativeSKUsCalculator:
    def __init__(self, df, sku_r, ret):
        self.df = df
        self.sku_r = sku_r
        self.ret = ret

    def calculate(self):
        brand = self.df.loc[self.df['sku'] == self.sku_r, 'brand'].values[0]
        segment = self.df.loc[self.df['sku'] == self.sku_r, 'segment'].values[0]
        conds = (self.df['brand'] == brand) & (self.df['retailer'] == self.ret) & (self.df['segment'] == segment)
        tmp = self.df[conds].drop(columns = ['retailer', 'brand']).drop_duplicates().copy()
        tmp = tmp.set_index('sku').T

        try:
            if self.sku_r in tmp.columns:
                tmp_r = tmp[self.sku_r]
            else:
                return pd.DataFrame()
        except Exception as e:
            return self._error_response(str(e))

        tmp = tmp.drop(columns = self.sku_r)
        tmp.loc['score_1'] = 1 * (tmp.loc['segment'] == tmp_r['segment'])
        tmp.loc['score_3'] = (tmp.loc['reckitt_inv'] / tmp_r['reckitt_inv'])

        tmp.loc['score_4'] = (tmp.loc[['reckitt_inv', 'currentallocation']].min(axis = 1) / tmp_r['sif-reckitt'])
        tmp.loc['score_5'] = (tmp.loc[['Sell out', 'currentcustSOH', 'sif-reckitt']].apply(lambda x: self._score5(x[0], x[1], x[2]), axis = 0))
        tmp.loc['score_6'] = (tmp.loc[['custwoc-target', 'custwoc-current']].apply(lambda x: self._score6(x[0], x[1]), axis = 0))
        tmp.loc['score_7'] = 1 - abs(tmp.loc['price'] - tmp_r['price'] / tmp_r['price'])
        # tmp.loc[['score_1', 'score_3', 'score_4', 'score_5', 'score_6', 'score_7']] /= tmp.loc[['score_1', 'score_3', 'score_4', 'score_5', 'score_6', 'score_7']].max(axis = 1).values.reshape(-1,1)
        tmp.loc['score_final'] = tmp.loc[['score_1', 'score_3', 'score_4', 'score_5', 'score_6', 'score_7']].sum(axis = 0)
        tmp = tmp.loc[['score_final']].T
        tmp['score_final'] = (tmp['score_final'] - tmp['score_final'].min()) / (tmp['score_final'].max() - tmp['score_final'].min())
        return tmp

    def _error_response(self, message):
        return jsonify(status="error", message=message), 500

    def _score5(self, a, b, c):
        try:
            return (a / (b + c))
        except:
            return np.nan

    def _score6(self, a, b):
        try:
            return a / b
        except:
            return np.nan


    def _score7(self, a, b):
        try:
            return 1 - (abs(b - a) / a)
        except:
            return np.nan


# ************************** HELPER FUNCTIONS  *****************************
#
#
# **************************************************************************
def replace_missing_values(df):
    missing_values = [None, 'null', 'NULL', 'Null', 'Nan', 'nan', 'NaN', ' ', '', 'None; None']
    cleaned_df = df.replace(missing_values, '-')

    # Limit float values to 2 decimal places and replace 0.00 with 0
    cleaned_df = cleaned_df.applymap(lambda x: round(x, 2) if isinstance(x, float) and x not in [0, 0.00] else x).replace(0.00, 0)
    df = cleaned_df.fillna('-')
    for col in df.columns:
        if 'ExpSL' in col or 'recom-score' in col:
            df[col] = df[col].apply(lambda x: f"{int(x)*100}%" if isinstance(x, (int, float)) else x)
        if 'Exp NR' in col:
            df[col] = df[col].apply(lambda x: f"{x:.2f}" if isinstance(x, (int, float)) and x != 0 else x)
        if 'SOH' in col or 'SoH' in col or 'EXPSOHATEOW' in col or 'soh' in col:
            df[col] = df[col].apply(lambda x: int(x) if isinstance(x, (float)) else x)
        if 'RB SKU' not in col:
            df[col] = df[col].apply(lambda x: f"{x:,}" if isinstance(x, (int, float)) else x)
    df = df.replace([0.00, 0.0, "0.00", "0.0"], 0)
    # df = df.apply(lambda x: f"{int(x)*100}%" if isinstance(x, (int, float)) else x)
    return df