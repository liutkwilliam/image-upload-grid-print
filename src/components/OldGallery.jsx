import React from 'react'
import { useState, useEffect } from 'react';
import { storage } from '../firebase/config';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

function OldGallery() {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        const imageListRef = ref(storage, "images/");
        listAll(imageListRef).then((response) => {
          console.log(response);
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageList((prev) => [...prev, url]);
            });
          });
        });
      }, []); // Empty dependency array to run the effect only once on component mount
  return (
    <div>
        {imageList.map((url, index) => (
            <img className="image-list" key={index} src={url} alt={`image_${index}`} />
        ))}
    </div>
  )
}

export default OldGallery