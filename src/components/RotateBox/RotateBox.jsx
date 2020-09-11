import React from 'react';

function RotateBox({setRotate, rotate}) {
    function rotateRight(){
        if (rotate < 270 ){
            setRotate(rotate+90)
        }
        else {
            setRotate(0)
        }
    }
    function rotateLeft(){
        if (rotate > 0 ){
            setRotate(rotate-90)
        }
        else {
            setRotate(270)
        }
    }

    return (
        <div className='box'>
            <p className='label'>Rotate</p>
            <button className='btn' onClick={() => {rotateLeft()}}>Left</button>
            <button className='btn' onClick={() => {rotateRight()}}>Right</button>
        </div>
    )
}

export default RotateBox;