# Gemini Content Generator 🌟

Gemini Content Generator is a web application that enables users to create text and image content using Google's Gemini models.

## Features ✨

- **Text Generation**: Utilize the Gemini Pro model to generate text based on a prompt.
- **Vision-Based Responses**: Upload images to generate vision-based responses using the Gemini Pro Vision model.

## Technologies Used 🛠️

- **React**: Frontend framework for crafting user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and reliability.
- **Axios**: Promise-based HTTP client for facilitating requests to the server.
- **Flask**: Backend framework for constructing web applications in Python, offering flexibility and scalability.
- **Google GenerativeAI**: API for accessing Google's advanced generative models, powering the core functionality of the application.

## Installation 🚀

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/AriajSarkar/Chaemini-Ai.git
    ```

2. **Install backend dependencies**:

    ```bash
    cd server
    ```

    ```bash
    cp .env.example .env.local
    ```

    ```bash
    python -m venv venv
    ```

    **On Windows**:
    ```bash
    venv\Scripts\activate
    ```

    **On Unix or MacOS**:
    ```bash
    source venv/bin/activate
    ```

    **For Deactivate**:
    ```bash
    Deactivate
    ```

    ```bash
    pip install -r requirements.txt
    ```

    ```bash
    python gapp.py
    ```

    **(Optional) If you want to install new dependencies**:

    ```bash
        pip install --upgrade --force-reinstall -r requirements.txt
    ```

3. **Install frontend dependencies**:

    ```bash
    cd web
    npm install
    npm run dev
    ```

## How to Contribute 🤝

Contributions are welcome! Please adhere to the following steps:

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature-branch`).
3. **Make your changes**.
4. **Commit your changes** (`git commit -am 'Add new feature'`).
5. **Push to the branch** (`git push origin feature-branch`).
6. **Create a new Pull Request**.

## License 📝

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Feel free to customize this README.md file further according to your project's specific details and requirements.

## Additional Notes 📝

- The `venv` directory is a virtual environment used to isolate the project's dependencies from the system's installed packages.
- The `gapp.py` script is the entry point for the Flask application.
- The `requirements.txt` file lists the required Python packages for the project.
- The `npm install` command installs the necessary Node.js packages for the frontend application.
- The `npm run dev` command starts the development server for the frontend application.
