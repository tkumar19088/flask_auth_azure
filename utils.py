import pyodbc
from dotenv import load_dotenv
import os
from flask import jsonify
from azure.storage.blob import BlobServiceClient
import pyarrow.parquet as pq
from io import BytesIO
import pandas as pd

load_dotenv()

# Load database environment variables from .env file
server = os.getenv("SERVER")
database = os.getenv("DATABASE")
dbusername = os.getenv("DBUSERNAME")
password = os.getenv("PASSWORD")
driver = os.getenv("DRIVER")
connection_string = os.getenv("azure_connection_string")

# The `UserDataReader` class is responsible for connecting to a database and retrieving user details
# based on a provided username.
class UserDataReader:
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


# def getUserDetails(user_name):
#     """
#     The function `getUserDetails` retrieves user details from a database based on the provided username.

#     :param user_name: The `user_name` parameter is the username of the user whose details you want to
#     retrieve from the `UsersTable` in the database

#     :return: a dictionary containing the user details (name, email, country, and role) if the user is
#     found in the UsersTable. If there is an exception during the execution of the query, it will return
#     a JSON response with an error message and a status code of 500.
#     """
#     # Build connection string
#     conn = pyodbc.connect(
#         f'DRIVER={driver};'
#         f'SERVER={server};'
#         f'DATABASE={database};'
#         f'UID={dbusername};'
#         f'PWD={password}'
#     )
#     cur= conn.cursor()
#     # Build cursor & Query user details
#     # with conn.cursor() as cur:
#     try:
#         query = f"SELECT * FROM UsersTable WHERE UserName = '{user_name}'"
#         cur.execute(query)
#         user_details = cur.fetchone()
#         # Build user details dictionary
#         if user_details:
#             userdetails = {
#                 "name": user_details[1],
#                 "email": user_details[2],
#                 "country": user_details[3],
#                 "role": user_details[4],
#             }
#             return userdetails
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


class AzureBlobReader:
    def __init__(self, connection_string):
        """
        The function initializes a BlobServiceClient object using a connection string.

        :param connection_string: The `connection_string` parameter is a string that contains the
        connection information needed to connect to the Azure Blob Storage service. It typically
        includes the account name and account key or a shared access signature (SAS) token. This
        connection string is used to create an instance of the `BlobServiceClient`
        """
        self.blob_service_client = BlobServiceClient.from_connection_string(connection_string)


    def _buildclient(self, blob_name):
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
        blob_client = blob_container_client.get_blob_client(blob=blob_name)

        # Build stream for data from blob
        stream_downloader = blob_client.download_blob()
        stream = BytesIO()
        stream_downloader.readinto(stream)
        return stream

    def read_parquet(self, blob_name):
        """
        The function reads a Parquet file from Azure Blob Storage and returns it as a Pandas DataFrame.

        :param container_name: The container_name parameter refers to the name of the container where
        the Parquet file is stored. A container is a logical grouping of blobs within a storage account
        in Azure Blob Storage
        :param blob_name: The `blob_name` parameter is the name of the Parquet file stored in the
        specified Azure Blob Storage container
        :return: a Pandas DataFrame object.
        """
        stream = self._buildclient(blob_name)
        return pd.read_excel(stream)

    def read_excel(self, blob_name):
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
        stream = self._buildclient(blob_name)
        return pq.read_table(source=stream)

# if __name__ == "__main__":
#     azure_connection_string = "DefaultEndpointsProtocol=https;AccountName=satrinitydevecommercest1;AccountKey=O6Zd3hHePAcyq9fYXSr1nNiNZ2xmti3r99hwrhgufcWnKCWbtZz5PT/kmOGLo8qyfiMgSr4NpXUe+AStYu8oWQ==;EndpointSuffix=core.windows.net"
#     container_name = "adlstrinitydatahubexternalpoc"
#     blob_name = "OHR-sample-dummy-data.xlsx"
#     blob_name = "your_blob_name.parquet"

#     blob_reader = AzureBlobReader(azure_connection_string)
#     parquetdata = blob_reader.read_parquet(container_name, blob_name)
#     exceldata = blob_reader.read_excel(container_name, blob_name)