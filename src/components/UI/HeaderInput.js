import classes from './Input.module.css';
const HeaderInput = (props) => {
    return <input
         placeholder= {props.placeholder} 
         onChange={props.onChange}
        className = {classes['header-input']} 
        type = {props.type} 
        value = {props.value}
        readOnly = {props.readOnly}
        style = {props.style}
        ></input>
}

export default HeaderInput;