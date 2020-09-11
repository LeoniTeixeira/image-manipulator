import React from 'react';

// import { Container } from './styles';

function MirrorBox({mirrorX, setMirrorX, mirrorY, setMirrorY}) {
    function mirrorVertical(){
        setMirrorY(!mirrorY)
    }
    function mirrorHorizontal(){
        setMirrorX(!mirrorX)
    }
    return (
        <div className='box'>
            <p className='label'>Mirror</p>
            <button className='btn' onClick={() => {mirrorVertical(mirrorY)}}>Vertical</button>
            <button className='btn' onClick={() => {mirrorHorizontal(mirrorX)}}>Horizontal</button>
        </div>
    )
}


export default MirrorBox;