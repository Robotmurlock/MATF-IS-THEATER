import requests
import json

azuriraj1 = {
    'id': 1,
    'data': {
        'ime': 'Djani Skiki',
        'opis': '...',
        'glumci': ['Ime Prezime', 'Ime Prezime'],
        'reditelj': 'Miko Marković',
        'status': 'odbijena',
    }
}

azuriraj2 = {
    'id': 100,
    'data': {
        'ime': 'Djani Skiki',
        'opis': '...',
        'glumci': ['Ime Prezime', 'Ime Prezime'],
        'reditelj': 'Miko Marković',
        'status': 'odbijena',
    }
}

def run():
    URL = 'http://localhost:5000/azuriraj'

    response = requests.put(url=URL, json=azuriraj1)
    data = response.text
    print(data)

    response = requests.put(url=URL, json=azuriraj2)
    data = response.text
    print(data)

if __name__ == '__main__':
    run()
