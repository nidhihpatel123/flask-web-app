from flask import Flask
from end_points.data_operations import data_operations

app = Flask(__name__)
app.register_blueprint(data_operations)


@app.route('/')
def hello():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run(debug=True)
