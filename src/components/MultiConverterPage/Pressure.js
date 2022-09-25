import React from 'react';
import Options from '../UI/Options';
import useCreator from '../Hooks/use-Creator';
import Input from '../UI/input';

const pressureData = {
    atm: {'atm': 1, 'Pa': 101325, 'mmHg': 760, 'torr': 760, 'bar': 1.01325},
    Pa: {'Pa': 1, 'mmHg': 0.00750062, 'torr': 0.00750062, 'atm': 9.8692e-9, 'bar': 1e-5},
    mmHg: {'mmHg': 1, 'atm': 0.00131579, 'Pa': 133.322, 'torr': 1, 'bar': 0.00133322},
    torr: {'torr': 1, 'atm': 0.00131579, 'Pa': 133.322, 'mmHg': 1, 'bar': 0.00133322},
    bar: {'bar': 1, 'torr': 750.062, 'atm': 0.986923, 'Pa': 1e+5, 'mmHg': 750.062}}

const Pressure = (props) => {
    const options = Object.keys(pressureData);

    const {
        setIn: setPressureFrom, 
        setOut: setPressureTo, 
        setP: setPressurePower,
        inSymbol: pressureFromUnit,
        outSymbol: pressureToUnit,
        conversion: pressureConversion,
        input,
        power,
        output
        } = useCreator(pressureData, props.resetButtonIsClicked)
        
        props.setInItem(pressureFromUnit);
        props.setOutItem(pressureToUnit);
        props.setValue(pressureConversion);
    return(
        <tr>
            <td>Pressure</td>
            <td>
                <Options options = {options} onChange = {setPressureFrom} defaultValue = {input}></Options>
            </td>
            <td>
                <Input onChange = {setPressurePower} defaultvalue = {power}/>
            </td>
            <td>
                <Options options = {options} onChange = {setPressureTo} defaultValue = {output}/>
            </td>
        </tr>
    )
}

export default Pressure; 