from flask import Blueprint
from utilities.elasticsearch_connector import get_es_connector

data_operations = Blueprint('data_operations', __name__)

es = get_es_connector()


@data_operations.route("/update")
def update_data():
    print(es.search(index='twitter'))
    return "hello world"


@data_operations.route("/search")
def search_data():
    s = es()
