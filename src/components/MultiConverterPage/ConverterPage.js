import Mass from "./Mass";
import Time from "./Time";
import Length from "./Length";
import Pressure from "./Pressure";
import Power from "./Power";
import Energy from "./Enery";
import Current from './Current';
import AmountOfSubstance from "./AmountOfSubstance";
import LuminousIntensity from "./LuminousIntensity";
// import Temperature from "./Temperature";
import HeaderInput from "../UI/HeaderInput";
import classes from './ConverterPage.module.css';
import Button from "../UI/Button";
import Options from "../UI/Options";
import useFinder from "../Hooks/use-finder";
import { useEffect, useState } from "react";


const Prefix = {
    Kilo: {'symbol': 'K', 'value': 1e3},
    Mega: {'symbol': 'M', 'value': 1e6},
    Giga: {'symbol': 'G', 'value': 1e9},
    Centi : {'symbol': 'c', 'value': 1e-2},
    Milli: {'symbol': 'm', 'value': 1e-3},
    Micro : {'symbol' : 'μ', 'value': 1e-6}
}

//provides the option for the Prefix option;
const options = Object.keys(Prefix);

const ConverterPage = () => {

    //Managing the inputUnits and outPut units
    const [inputSymbolHolder, setInputSymbolHolder] = useState([]);
    const [outputSymbolHolder, setOutputSymbolHolder] = useState([]);
    const [valueHolder, setValueHolder] = useState([1]);
    const [inputValue, setInputValue] = useState(1);

    const [resetButtonIsClicked, setResetButtonIsClicked] = useState(false);
    //manages the prefix symbol and value.
    const [prefix, setPrefix] = useState('');

    const prefixChangeHandler = (event) => {
        setPrefix(event.target.value);
    }

    function SetIn(item){
        useEffect(() => {
            if(!inputSymbolHolder.includes(item))
            setInputSymbolHolder([...inputSymbolHolder, item])
        }, [item])        
    }

    function SetOut(item){
        useEffect(() => {
            setOutputSymbolHolder([...outputSymbolHolder, item])
        }, [item])
    }

    function SetValue(convertedValue){
        useEffect(() => {
            if(!valueHolder.includes(convertedValue))
            setValueHolder([...valueHolder, convertedValue]);
        }, [convertedValue])
    }

    const outputValue = valueHolder.filter(num => num !== undefined).reduce((a,b)=> a*b, 1);
    const showIn = (inputSymbolHolder.filter(item => item !== undefined)).join(' ')

    const showOut = (outputSymbolHolder.filter(item => item !== undefined)).join(' ');

    const inputValueHandler = (event) => {
        setInputValue([event.target.value]);
    }

    let prefixValue = 1
    let prefixSymbol = '';
    if(prefix !== '' && prefix !== 'Prefix'){
        prefixSymbol = Prefix[prefix]['symbol'];
        prefixValue = Prefix[prefix]['value'];
    }
    
    const {hint: giveHint, setOutPutHint: setHint} = useFinder(showIn);
    
    useEffect(() => {
        setHint(showIn)
    }, [showIn, setHint]);
    
    //main Out seen by the user
    const mainOutputValue = inputValue * outputValue * prefixValue;
    const mainInputSymbol = prefixSymbol + showIn;


    function ResetAll(){
        setInputValue(1);
        setValueHolder([1]);
        setInputSymbolHolder([]);
        setOutputSymbolHolder([]);
        setPrefix('Prefix');
        setResetButtonIsClicked(true);
    }

    useEffect(() =>{
        const timeout = setTimeout(() => {
             setResetButtonIsClicked(false)
         }, 1000);

     return () => {clearTimeout(timeout)}
     }, [resetButtonIsClicked])

    return(
        <>
        <div className={classes.header}>
            <div className={classes.converter}>
                <div>
                    <h3>Input</h3>
                    <div className={classes.box}>
                        <div>
                            <Options options = {options} none = {`Prefix`} onChange = {prefixChangeHandler} defaultValue = {prefix}></Options>
                        </div>
                        <HeaderInput placeholder = 'input' type = 'number' onChange = {inputValueHandler} value = {inputValue}/>
                        <Button content = {mainInputSymbol ? mainInputSymbol : 'Unit'}/>
                    </div>
                </div>
                <div>
                    <h3>Output</h3>
                    <div className={classes.box}>
                        <HeaderInput placeholder = 'output' type = 'number' value={mainOutputValue} readOnly = {true} style = {{'width': '300px'}}/>
                        <Button content = {showOut ? showOut : 'Unit'}/>
                    </div>
                </div>
                
                <div className = {classes.hint}>
                    <span>Hint: </span>
                    <p>{giveHint}</p>
                </div>
            </div>
            <div className={classes.buttomHeader}>
                <button onClick = {ResetAll} className = {classes.button}>Reset</button>
            </div>
            </div>
            <table className={classes.aTable}>
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Power</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    <Mass setInItem = {SetIn} setOutItem ={SetOut} setValue = {SetValue} resetButtonIsClicked = {resetButtonIsClicked}/>
                    <Time setInItem = {SetIn} setOutItem = {SetOut} setValue = {SetValue} resetButtonIsClicked = {resetButtonIsClicked}/>
                    <Length setInItem = {SetIn} setOutItem = {SetOut} setValue = {SetValue} resetButtonIsClicked = {resetButtonIsClicked}/>
                    <Pressure setInItem = {SetIn} setOutItem = {SetOut} setValue = {SetValue} resetButtonIsClicked = {resetButtonIsClicked}/> 
                    <Power setInItem = {SetIn} setOutItem = {SetOut} setValue = {SetValue} resetButtonIsClicked = {resetButtonIsClicked}/>
                    <LuminousIntensity setInItem = {SetIn} setOutItem = {SetOut} setValue = {SetValue} resetButtonIsClicked = {resetButtonIsClicked}/>
                    <Energy setInItem = {SetIn} setOutItem = {SetOut} setValue = {SetValue} resetButtonIsClicked = {resetButtonIsClicked}/>
                    <AmountOfSubstance setInItem = {SetIn} setOutItem = {SetOut} setValue = {SetValue} resetButtonIsClicked = {resetButtonIsClicked}/>
                    <Current setInItem = {SetIn} setOutItem = {SetOut} setValue = {SetValue} resetButtonIsClicked = {resetButtonIsClicked}/>
                    {/* <Temperature userInput = {inputValue} setInItem = {SetIn} setOutItem = {SetOut} setValue = {SetValue} />  */}
                </tbody>
            </table>
        </>
    )
}

export default ConverterPage;