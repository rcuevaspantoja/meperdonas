import React from 'react'
import GifLinks from '../../assets/GifLinks.json';
import dynamic from 'next/dynamic';

const chooseGif = () => {
  const randomIndex = Math.floor(Math.random() * GifLinks.length);
  return GifLinks[randomIndex].url;
}

export default chooseGif