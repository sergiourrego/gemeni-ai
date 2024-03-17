import { useState, FormEvent, ChangeEvent } from 'react';
import ImageInputComponent from './ImageInput';
import ResponseComponent from './Response';
import styles from '../Styles/Interface.module.css';
import axios from 'axios';

function Interface() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (imageFile) {
      // Handle image submission
      try {
        const formData = new FormData();
        formData.append('user_image', imageFile);

        const res = await axios.post('/api/g/generate-vision', formData);
        if (!res.data || res.data.response.trim() === '') {
          setResponse('Please provide more details of what you need.');
        } else {
          setResponse(res.data.response);
        }
      } catch (error) {
        console.error('Error generating images:', error);
      }
    } else {
      // Handle text submission
      try {
        if (prompt.trim().length === 1) {
          setResponse('Please provide more details of what you need.');
          return;
        }

        const res = await axios.post('/api/g/generate-text', { prompt });
        if (!res.data || res.data.text.trim() === '') {
          setResponse('Please provide more details of what you need.');
        } else {
          setResponse(res.data.text);
        }
      } catch (error) {
        console.error('Error generating text:', error);
      }
    }
  };

  // Handle image input changes
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file || null);
  };

  return (
    <div className={styles.container}>
    <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl" onSubmit={handleSubmit}>
      <div className="relative flex h-full flex-1 flex-col">
        <div className="flex w-full items-center">
          <div className={`overflow-hidden ${(!prompt && !imageFile) ? 'border-token-border-xheavy shadow-[0_2px_6px_rgba(0,0,0,.05)]' : ''} flex flex-col w-full flex-grow relative border dark:text-white rounded-2xl bg-token-main-surface-primary border-token-border-medium`}>
            <textarea
              id={styles.prompttextare}
              tabIndex={0}
              rows={1}
              placeholder="Message Chaemini…"
              className="m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent py-[10px] pr-10 md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              spellCheck={false}
            />
            <button
            id={styles.sendbutton}
              type="submit"
              title='send'
              disabled={!prompt && !imageFile}
              className={`absolute bottom-1.5 right-2 rounded-lg border bg-black p-0.5 text-white enabled:bg-white disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white md:bottom-3 md:right-3`}
              data-testid="send-button"
            >
              <span data-state="closed">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black">
                  <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <ImageInputComponent
        imageFile={imageFile}
        handleImageChange={handleImageChange}
      />
    </form>
    <div
    id={styles.response}
    className={`top-12`}>
      <ResponseComponent response={response} />
      </div>
    </div>
  );
}

export default Interface;
