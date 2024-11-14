import React, { useState } from 'react';
import axios from 'axios';

export default function UrlForm({ setShortUrl }) {
  const [originalUrl, setOriginalUrl] = useState('');
  const [error, setError] = useState('');

  const backendUrl = import.meta.env.VITE_Backend_Url;
  console.log("bakendUrl is " , backendUrl);

  const handleSubmitUrl = async (event) => {
    event.preventDefault();

    if (!originalUrl) {
      setError("Please provide a URL");
      return;
    }

    try {
      const response = await axios.post(backendUrl, { originalUrl });
      setShortUrl(response.data.shortUrl);
      setOriginalUrl(''); // Clear input field after successful submission
      setError('');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to shorten URL';
      setError(errorMessage);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitUrl}>
        <input
          type='text'
          value={originalUrl}
          placeholder="Enter the Original URL"
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button type='submit' disabled={!originalUrl}>Shorten</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}
