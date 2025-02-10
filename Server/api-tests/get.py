import requests

base_url = 'http://localhost:3000/api/greetings'

# Test GET request
print('Sending GET request to', base_url)
response = requests.get(base_url)
print('Response status code:', response.status_code)
print('Response body:', response.json())