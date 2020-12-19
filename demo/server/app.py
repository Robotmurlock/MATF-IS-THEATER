from flask import Flask, request
from flask_cors import CORS, cross_origin
import os
import json
app = Flask(__name__)
cors = CORS(app)

ps = {
        1: {
          'id': 1,
          'organizator': 'Ognjen Milinković',
          'naziv': 'Antigona',
          'opis': '...',
          'glumci': ['Ime Prezime', 'Ime Prezime'],
          'reditelj': 'Jagoš Marković',
          'status': 'prijavljena',
        },
        2: {
          'id': 2,
          'organizator': 'Katarina Savičić',
          'naziv': 'Katarinina Antigona',
          'opis': '...',
          'glumci': ['Dragana Milić', 'Nikola Vuković'],
          'reditelj': 'Jagoš Marković',
          'status': 'prijavljena',
        },
        3: {
          'id': 3,
          'organizator': 'Nikola Vuković',
          'naziv': 'Bela kafa',
          'opis': '...',
          'glumci': ['Ime Prezime', 'Ime Prezime'],
          'reditelj': 'Aleksandar Popović',
          'status': 'u pripremi',
        },
        4: {
          'id': 4,
          'organizator': 'Ognjen Milinković',
          'naziv': 'Sumnjivo lice',
          'opis': '...',
          'glumci': ['Ime Prezime', 'Ime Prezime'],
          'reditelj': 'Jagoš Marković',
          'status': 'skica',
        },
}

next_id = 5

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
