import requests
import json

nova_predstava = {
    'ime': 'Djani Skiki',
    'opis': '...',
    'glumci': ['Ime Prezime', 'Ime Prezime'],
    'reditelj': 'Miko Marković',
    'status': 'odbijena',
}

def run():
    URL = 'http://localhost:5000/dodaj'

    response = requests.post(url=URL, json={'data': nova_predstava})
    data = response.text
    print(data)

if __name__ == '__main__':
    run()
