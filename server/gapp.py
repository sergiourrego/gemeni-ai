import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv('.env.local')

# Configure the API key for google.generativeai
genai.configure(api_key=os.getenv('API_KEY'))

app = Flask(__name__)
CORS(app)

# Initialize Gemini models without passing api_key as an argument
gemini_pro = genai.GenerativeModel('gemini-pro')

@app.route('/api/g/generate-text', methods=['POST'])
def generate_text():
    data = request.get_json()
    prompt = data.get('prompt')
    response = gemini_pro.generate_content(prompt)

    # Convert the response to a serializable format
    response_data = {
        'text': response.text,
        # Include any other relevant fields from the response
    }

    return jsonify(response_data)


# Initialize Gemini models without passing api_key as an argument
gemini_pro_vision = genai.GenerativeModel('gemini-pro-vision')

@app.route('/api/g/generate-vision', methods=['POST'])
def generate_vision():
    if 'user_image' not in request.files:
        return jsonify({"error": "No file part"})

    file = request.files['user_image']

    if file.filename == '':
        return jsonify({"error": "No selected file"})

    if file:
        image_data = file.read()
        image_parts = [
            {
                "mime_type": file.content_type,
                "data": image_data
            },
        ]

        prompt_parts = [
            "Prompt for Gemini Pro Vision",
            image_parts[0],
        ]

        response = gemini_pro_vision.generate_content(prompt_parts)

        return jsonify({
            "response": response.text
        })

if __name__ == '__main__':
    app.run(debug=True)
