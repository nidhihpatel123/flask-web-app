from flask import Blueprint, request, json
from elasticsearch_dsl import Search, document, index
from utilities.elasticsearch_connector import get_es_connector

data_operations = Blueprint('data_operations', __name__)

client = get_es_connector()


@data_operations.route("/update", methods=['POST'])
def update_data():
    return "Hello Test"


@data_operations.route("/search", methods=['POST'])
def search_data():
    data = request.get_json(force=True, silent=True)['category']
    s = Search(using=client, index="products")
    s = s.query("match", category=data)
    resp = s.execute().to_dict()['hits']['hits']
    return_resp = []
    for r in resp:
        return_resp.append(r['_source'])
    return json.dumps({"response": return_resp})


@data_operations.route("/add_item", methods=['POST'])
def add_item():
    data = request.get_json(force=True, silent=True)['item']
    client.index(index='products', doc_type='items', body=data)
    return json.dumps({"response": "Hello World"})
