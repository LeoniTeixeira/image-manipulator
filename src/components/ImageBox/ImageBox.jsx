import React from 'react';

import './ImageBox.css'
import Frame from '../../assets/frame.jpg'

function ImageBox() {
  return (
    <div className='img-container'>
        <img className='img' src={Frame}/>
    </div>
  )
}

export default ImageBox;