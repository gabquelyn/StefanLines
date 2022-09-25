import React from 'react';
import Options from '../UI/Options';
import useCreator from '../Hooks/use-Creator';
import Input from '../UI/input';

const  lengthData = {
    km: {'km': 1, 'm': 1000, 'cm': 100000},
    m: {'m': 1, 'km': 0.001, 'cm': 100},
    cm: {'cm': 1, 'km': 10**(-5), 'm': 0.01}}

const Length = (props) => {
    const options = Object.keys(lengthData);

    const {
        setIn: setLengthFrom, 
        setOut: setLengthTo, 
        setP: setLengthPower,
        inSymbol: lengthFromUnit,
        outSymbol:  lengthToUnit,
        conversion: lengthConversion,
        input, 
        power,
        output
        } = useCreator(lengthData, props.resetButtonIsClicked)
        
        props.setInItem(lengthFromUnit);
        props.setOutItem(lengthToUnit);
        props.setValue(lengthConversion);
    return(
        <tr>
            <td>Length</td>
            <td>
                <Options options = {options} onChange = {setLengthFrom} defaultValue = {input}></Options>
            </td>
            <td>
                <Input onChange = {setLengthPower} defaultValue = {power}/>
            </td>
            <td>
                <Options options = {options} onChange = {setLengthTo} defaultValue = {output}/>
            </td>
        </tr>
    )
}

export default Length; 