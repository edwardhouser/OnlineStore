import pymongo
import certifi

connection_string = "mongodb+srv://edwardhouser:houser05@edsfirstcluster.ctmaj.mongodb.net/?retryWrites=true&w=majority&appName=EdsFirstCluster"

client = pymongo.MongoClient(connection_string, tlsCAFile=certifi.where())

db = client.get_database("organika")