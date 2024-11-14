import React from 'react'

export default function ShortenedUrl({shortUrl}) {

  console.log(shortUrl);
  return (
   <>
   {shortUrl && (
      <div>
        <p>Your shortened URL is:</p>
        <a href ={`http://localhost:3000/api/${shortUrl}`} target ="_blank" rel = "noopener noreferrer">
          {`http://localhost:3000/api/${shortUrl}`}
        </a>
      </div>
    )}
   </>
  )
}
