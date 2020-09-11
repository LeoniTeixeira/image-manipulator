import React from 'react';

import Frame from '../../assets/frame.jpg'
import './EffectBox.css'
function EffectBox({setEffect}) {

    return (
        <div>  
            <p className='label'>Effect</p>
            <div className='flex-container'>
                <img role='button' className='preview-img' 
                    src={Frame} onClick={() => {setEffect(0)}}/>
                <img role='button' className='preview-img bw-effect' 
                    src={Frame} onClick={() => {setEffect(1)}}/>
                <img role='button' className='preview-img sepia-effect' 
                    src={Frame} onClick={() => {setEffect(2)}}/>
                <img role='button' className='preview-img blur-effect' 
                    src={Frame} onClick={() => {setEffect(3)}}/>
            </div>
        </div>
    )
}

export default EffectBox;