import React from 'react';
import './Input.css';

const Input = function(props){
    const callChangeHandler = (event) => {
        console.log(event);
        props.changed(event, props.idx);
    }
const activeIndexTag = props.activeIdx ||  props.activeIdx === 0  ? <span>{props.activeIdx}</span> :  '';
    return(
        <div className = "InputSection">
            {activeIndexTag}
            <input type = "text" value = {props.userName} onChange = {callChangeHandler} />
        </div>
    )
}

export default Input;