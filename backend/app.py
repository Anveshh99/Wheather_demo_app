from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route('/weather', methods=['POST'])
def get_weather():
    data = request.get_json()
    city = data.get('city')

    if not city:
        return jsonify({'error': 'City not provided'}), 400

    # Replace 'YOUR_API_KEY' with an actual API key from a weather API provider.
    api_key = 'YOUR_API_KEY'
    weather_api_url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'

    try:
        response = requests.get(weather_api_url)
        data = response.json()

        if response.status_code == 200:
            weather_info = {
                'city': data['name'],
                'temperature': data['main']['temp'],
                'description': data['weather'][0]['description'],
            }
            return jsonify(weather_info)
        else:
            return jsonify({'error': 'Failed to fetch weather data'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
