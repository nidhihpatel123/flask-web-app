from flask import Blueprint
from elasticsearch_dsl import Search
from utilities.elasticsearch_connector import get_es_connector

data_operations = Blueprint('data_operations', __name__)

client = get_es_connector()


@data_operations.route("/update")
def update_data():
    s = Search()


@data_operations.route("/search")
def search_data():
    s = Search()
