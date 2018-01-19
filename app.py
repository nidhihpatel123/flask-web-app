from flask import Flask

app = Flask(__name__, static_url_path='')


@app.route('/')
def hello():
    return app.send_static_file('index.html')


@app.route('/get_info')
def getInfo(name):
    return "Hello " + name


if __name__ == "__main__":
    app.run(debug=True)
