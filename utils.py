import pyodbc
from dotenv import load_dotenv
import os
from flask import jsonify
from azure.storage.blob import BlobServiceClient
import pyarrow.parquet as pq
import io
import pandas as pd
from flask_cors import CORS, cross_origin
import json
import ast

load_dotenv()

# The `UserDataReader` class is responsible for connecting to a database and retrieving user details
# based on a provided username.
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
    
    @cross_origin()
    def getUserDetails(self, uemail):
        """
        The function fetches user details from a database based on the provided username.

        :param uname: The `uname` parameter is a string that represents the username of the user whose
        details you want to fetch from the `UsersTable` in the database
        :return: The fetch_user_details function returns the details of a user from the UsersTable based
        on the provided username.
        """
        usersdata = self.fetch_user_excel("users.xlsx")
        user_details = usersdata[usersdata["Email"] == uemail]
        if len(user_details) > 0:
            resp = json.loads(user_details.to_json(orient='records'))[0]
            resp['Location'] = ast.literal_eval(resp['Location'])
            resp['Business Unit'] = ast.literal_eval(resp['Business Unit'])
            resp['Customer'] = ast.literal_eval(resp['Customer'])
            print(f"\n\n{resp}\n\n")
            return resp
            # response = jsonify(user_details.to_dict(orient='records')[0])
            # return response
        else:
            return jsonify({"error": "User not found"}), 404


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
