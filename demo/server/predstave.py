import requests
from pprint import pprint

def run():
    URL = 'http://localhost:5000/predstave'
    response = requests.get(url=URL)
    data = response.json()
    pprint(data)

if __name__ == '__main__':
    run()
