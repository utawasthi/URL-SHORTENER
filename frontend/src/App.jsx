import React from 'react'
import { useState } from 'react';
import UrlForm from './components/UrlForm';
import ShortenedUrl from './components/ShortenedUrl';

export default function App() {
  const [shortUrl  , setShortUrl] = useState('');

  return (
    <>
     <h1>URL SHORTENER </h1>
     <UrlForm setShortUrl = {setShortUrl}/>
     <ShortenedUrl shortUrl = {shortUrl}/>
    </>
  )
}