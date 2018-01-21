from flask import Blueprint

data_operations = Blueprint('data_operations', __name__ )

@data_operations.route("/update")
def update_data():
    return "Hello World"
