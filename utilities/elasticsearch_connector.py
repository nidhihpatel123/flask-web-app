from elasticsearch import Elasticsearch


def get_es_connector():
    es = Elasticsearch(
        ['127.0.0.1'],
        port=9200)
    return es
