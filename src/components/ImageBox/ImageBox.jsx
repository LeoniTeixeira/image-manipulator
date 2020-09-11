import React, { useState } from 'react';

import RotateBox from '../RotateBox/RotateBox'

import './ImageBox.css'
import Frame from '../../assets/frame.jpg'

function ImageBox() {
    const [rotate, setRotate] = useState(0);

    function rotateImg(imgRot){
        switch(imgRot) {
            case 90:
                return 'img rot90';
            case 180:
                return 'img rot180';
            case 270:
                return 'img rot270';
            default:
                return 'img rot0';
        } 
    }

    return (
        <>
            <div className='img-container'>
                <img className={rotateImg(rotate)} src={Frame}/>
            </div>
            <RotateBox setRotate={setRotate} rotate={rotate}/>
        </>
    )
}

export default ImageBox;