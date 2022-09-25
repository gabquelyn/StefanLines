import React from 'react';
import classes from './Option.module.css';
const Options = (props) => {
    return(
        <>
    <select className = {classes.select} onChange={props.onChange} value = {props.defaultValue}>  
        <option>{props.none? `${props.none}` : `None`}</option>
        {props.options.map(option => <option key = {option}>{option}</option>)}
    </select>
    </>
    )
}

export default React.memo(Options);