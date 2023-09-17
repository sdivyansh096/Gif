import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
//import Tags from '../components/Tags';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData(tag) {
      setLoading(true);
      //  const output = await axios.get(url);
    //   console.log(tag);
      const { data } = await axios.get(tag? `${url}&tag=${tag}` : url );
      //  console.log(output);
      const imageSource = data.data.images.downsized_large.url;
      //console.log(imageSource);
      setGif(imageSource);
      setLoading(false);
    }
  
    useEffect( () => {
      fetchData('car');
    }, [] );
  return {gif,loading,fetchData};
 
}

export default useGif
