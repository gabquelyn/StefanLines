import classes from './Input.module.css';
const Input = (props) => {
    return <input placeholder= "ex" onChange={props.onChange} value = {props.defaultValue} className = {classes.input} type = 'number'></input>
}

export default Input;