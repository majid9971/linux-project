from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB URI from environment variable
client = MongoClient('mongodb://mongo:27017')
db = client['pritam_test_db']
collection = db['pritam_collection']

@app.route('/')
def get_data():
    data = collection.find_one()
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
