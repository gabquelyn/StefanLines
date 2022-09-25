import React from 'react';
import Options from '../UI/Options';
import useCreator from '../Hooks/use-Creator';
import Input from '../UI/input';

const massData = {
    lb:{'lb': 1, 'kg': 0.453592, 'g': 453.592 },
    kg: {'kg': 1, 'g': 1000, 'lb': 2.20462},
    g: {'g': 1, 'kg': 0.001, 'lb': 0.00220462}}

const Mass = (props) => {
    const options = Object.keys(massData);

    const {
        setIn: setMassFrom, 
        setOut: setMassTo, 
        setP: setMassPower,
        inSymbol: massFromUnit,
        outSymbol: massToUnit,
        conversion: massConversion,
        input,
        output,
        power
        } = useCreator(massData, props.resetButtonIsClicked)

        
        props.setOutItem(massToUnit);
        props.setValue(massConversion);
        props.setInItem(massFromUnit);
        
    return(
        <tr>
            <td>Mass</td>
            <td>
                <Options options = {options} onChange = {setMassFrom} defaultValue = {input}></Options>
            </td>
            <td>
                <Input onChange = {setMassPower} defaultValue = {power}/>
            </td>
            <td>
                <Options options = {options} onChange = {setMassTo} defaultValue = {output}/>
            </td>
        </tr>
    )
}

export default Mass; 