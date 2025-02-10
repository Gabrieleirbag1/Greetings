import requests
import json

base_url = 'http://localhost:3000/api/greetings'

# Test GET request
print('Sending GET request to', base_url)
response = requests.get(base_url)
print('Response status code:', response.status_code)
print('Response body:', response.json())

# Test PUT request
updated_greeting = {"title":"Salut","description":"voici le chat"}

# Assuming the ID of the greeting to update is 1
greeting_id = "67a9d28ee04af06dfad25fa0"
put_url = f"{base_url}/{greeting_id}"

print('Sending PUT request to', put_url, 'with body:', updated_greeting)
response = requests.put(put_url, json=updated_greeting)
print('Response status code:', response.status_code)
print('Response body:', response.json())