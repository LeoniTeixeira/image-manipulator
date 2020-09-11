import React, { useState } from 'react';

import RotateBox from '../RotateBox/RotateBox'
import MirrorBox from '../MirrorBox/MirrorBox'
import EffectBox from '../EffectBox/EffectBox'

import './ImageBox.css'

import Frame from '../../assets/frame.jpg'

function ImageBox() {
    const [rotate, setRotate] = useState(0);
    const [ mirrorY, setMirrorY] = useState(false);
    const [ mirrorX, setMirrorX] = useState(false);
    const [ effect, setEffect] = useState(0);

    const rot = rotateImg(rotate)
    const mirY = mirrorYImg(mirrorY)
    const mirX = mirrorXImg(mirrorX)
    const efc = selectEffect(effect)

    const img = 'img ' + rot + ' ' + mirY + ' ' + mirX + ' ' + efc

    function rotateImg(imgRot){
        switch(imgRot) {
            case 90:
                return 'rot90'
            case 180:
                return 'rot180'
            case 270:
                return 'rot270'
            default:
                return 'rot0'
        } 
    }

    function mirrorYImg(mirrorY) {
        if (mirrorY === true){
            return 'mirY'
        }
        else {
            return ''
        }
    }

    function mirrorXImg(mirrorX) {
        if (mirrorX === true){
            return 'mirX'
        }
        else {
            return ''
        }
    }

    function selectEffect(effectId){
        switch(effectId) {
            case 1:
                return 'bw-effect'
            case 2:
                return 'sepia-effect'
            case 3:
                return 'blur-effect'
            default:
                return ''
        } 
    }

    return (
        <>    
            <div className='main-container'>
                <div className='img-container'>
                    <img className={img} src={Frame}/>
                </div>
                <div className='flex-container' >
                    <RotateBox setRotate={setRotate} rotate={rotate}/>
                    <MirrorBox setMirrorX={setMirrorX} setMirrorY={setMirrorY} 
                                mirrorX={mirrorX} mirrorY={mirrorY}/>
                </div>
            
            <div>
                <EffectBox setEffect={setEffect}/>
            </div>
            </div>
        </>
    )
}

export default ImageBox;