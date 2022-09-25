import React from 'react';
import Options from '../UI/Options';
import useCreator from '../Hooks/use-Creator';
import Input from '../UI/input';

const powerData = {
    ergs: {'ergs': 1, 'Watt': 1e7, 'hp': 3.776e-14},
    hp: {'hp': 1, 'Watt': 735.499, 'ergs': 7.46e+9},
    Watt: {'Watt': 1, 'hp': 1.3596e-3, 'ergs': 1e7}}

const Power = (props) => {
    const options = Object.keys(powerData);

    const {
        setIn: setPowerFrom, 
        setOut: setPowerTo, 
        setP: setPowerPower,
        inSymbol: powerFromUnit,
        outSymbol: powerToUnit,
        conversion: powerConversion,
        input,
        power,
        output
        } = useCreator(powerData, props.resetButtonIsClicked)
        
        props.setInItem(powerFromUnit);
        props.setOutItem(powerToUnit);
        props.setValue(powerConversion);
    return(
        <tr>
            <td>Power</td>
            <td>
                <Options options = {options} onChange = {setPowerFrom} defaultValue = {input}></Options>
            </td>
            <td>
                <Input onChange = {setPowerPower} defaultValue = {power}/>
            </td>
            <td>
                <Options options = {options} onChange = {setPowerTo} defaultValue = {output}/>
            </td>
        </tr>
    )
}

export default Power; 