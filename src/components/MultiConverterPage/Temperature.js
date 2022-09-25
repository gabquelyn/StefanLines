import React from 'react';
import Options from '../UI/Options';
import useCreator from '../Hooks/use-Creator';
import Input from '../UI/input';


const temperatureData = {
    K: {'K': kelvin, 'C': celciusToKelvin, 'F': farinheitToKelvin},
    C: {'C': celcius, 'K': kelvinToCelcius, 'F': farenheitToCelcius},
    F: {'F': farinheit, 'K': kelvinToFareinheit, 'C': celciusToFarenheit}}

    function kelvin (value){
        return value;
    }

    function celcius(value){
        return value;
    }

    function farinheit(value){
        return value;
    }

    function celciusToKelvin(value){
        if(isNaN(value)){
            return 1;
        }
        return value + 273.15;
    }

    function farinheitToKelvin(value){
        if(isNaN(value)){
            return 1;
        }
        return ((value - 32) * (5/9) + 273.15).toFixed(2);
    }

    function kelvinToCelcius(value){
        if(isNaN(value)){
            return 1;
        }
        return value - 273.15;
    }

    function farenheitToCelcius(value){
        if(isNaN(value)){
            return 1;
        }
        return ((value - 32) * (5/9)).toFixed(2);
    }

    function kelvinToFareinheit(value){
        if(isNaN(value)){
            return 1;
        }
        return ((value - 273.15) * (9/5) + 32).toFixed(2)
    }

    function celciusToFarenheit(value){
        if(isNaN(value)){
            return 1;
        }
        return ((value * (9/5)) + 32).toFixed(2);
    }


const Temperature = (props) => {

    const {
        setIn: setTemperatureFrom, 
        setOut: setTemperatureTo, 
        setP: setTemperaturePower,
        inSymbol: temperatureFromUnit,
        outSymbol: temperatureToUnit,
        conversion: temperatureConversion
        } = useCreator(temperatureData, props.userInput);

        props.setInItem(temperatureFromUnit);
        props.setOutItem(temperatureToUnit);
        props.setValue(temperatureConversion);

    const options = Object.keys(temperatureData);
    return(
        <tr>
        <td>Temperature</td>
        <td>
            <Options options = {options} onChange = {setTemperatureFrom} ></Options>
        </td>
        <td>
            <Input onChange = {setTemperaturePower}/>
        </td>
        <td>
            <Options options = {options} onChange = {setTemperatureTo}/>
        </td>
    </tr>
    );
}

export default Temperature;