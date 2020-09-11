import React from 'react';

// import { Container } from './styles';

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
        <>
        <button onClick={() => {rotateLeft()}}>Left</button>
        <button onClick={() => {rotateRight()}}>Right</button>
        </>
    )
}

export default RotateBox;