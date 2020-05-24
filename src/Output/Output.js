import React from 'react';
import './Output.css'

const Output = function (props){

    const editStyle = {
        border: '2px solid #EEE',
        width: '50%',
        textAlign: 'center'
    }
    
    return(
        <div className = "OutputSection">
            <p style = {editStyle} onClick = {props.changeActiveIndex.bind(this,props.idx)}>Edit this user name</p>
            <p>{props.userName}</p>
        </div>
    )
}

export default Output;