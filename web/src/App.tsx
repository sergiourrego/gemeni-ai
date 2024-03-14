import { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleTextSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/g/generate-text', { prompt });
      setResponse(res.data.text);
    } catch (error) {
      console.error('Error generating text:', error);
    }
  };

  const handleImageSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!imageFile) {
        console.error('No image selected');
        return;
      }

      const formData = new FormData();
      formData.append('user_image', imageFile);

      const res = await axios.post('/api/g/generate-vision', formData);
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error generating images:', error);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file || null);
  };

  return (
    <div className="App">
      <h1>Gemini Content Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt"
      />
      <div>
        <form onSubmit={handleTextSubmit}>
          <button type="submit">Generate Text</button>
        </form>
      </div>
      <div>
        <form onSubmit={handleImageSubmit}>
          <input type="file" accept="image/*" onChange={handleImageChange} placeholder="Select an image" />
          <button type="submit">Generate Images</button>
        </form>
      </div>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
