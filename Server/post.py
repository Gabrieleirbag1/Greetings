import requests
import json

base_url = 'http://localhost:3000/api/greetings'

# Test GET request
print('Sending GET request to', base_url)
response = requests.get(base_url)
print('Response status code:', response.status_code)
print('Response body:', response.json())

# Test POST request
new_greeting = {
    'title': 'Hello Python',
    'description': 'A greeting from Python script',
    'createdAt': '2023-10-10T10:00:00Z',
    'greetings': 1,
    'imageUrl': 'http://example.com/image.jpg',
    'location': 'Earth',
}

print('Sending POST request to', base_url, 'with body:', new_greeting)
response = requests.post(base_url, json=new_greeting)
print('Response status code:', response.status_code)
print('Response body:', response.json())