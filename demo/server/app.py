from flask import Flask, request
from flask_cors import CORS, cross_origin
import os
import json
app = Flask(__name__)
cors = CORS(app)

DATA_FILE = './data.json'

with open(DATA_FILE, 'r') as data:
    ps = {int(k): v for k, v in json.loads(data.read()).items()}

next_id = 1 + max(ps.keys())

@app.route('/predstave', methods=['GET'])
def predstave():
    return json.dumps(ps)

@app.route('/dodaj', methods=['POST'])
def dodaj():
    global ps
    global next_id
    ps[next_id] = request.json['data']
    ps[next_id]['id'] = next_id
    next_id += 1
    return '{success: True}'

@app.route('/azuriraj', methods=['PUT'])
def azuriraj():
    global ps
    global next_id
    print(request.json)
    id = request.json['id']
    data = request.json['data']
    ps[id] = data
    return '{success: True}'

if __name__ == '__main__':
    app.run(debug=True)
