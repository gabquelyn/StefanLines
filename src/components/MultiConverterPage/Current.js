import React from 'react';
import Options from '../UI/Options';
import useCreator from '../Hooks/use-Creator';
import Input from '../UI/input';

const currentData = {
    amp: {'amp': 1}}

const Current = (props) => {
    const options = Object.keys(currentData);

    const {
        setIn: setCurrentFrom, 
        setOut: setCurrentTo, 
        setP: setCurrentPower,
        inSymbol: currentFromUnit,
        outSymbol: currentToUnit,
        conversion: currentConversion,
        input,
        output,
        power
        } = useCreator(currentData, props.resetButtonIsClicked)
        

        props.setInItem(currentFromUnit);
        props.setOutItem(currentToUnit);
        props.setValue(currentConversion);
    return(
        <tr>
            <td>Current</td>
            <td>
                <Options options = {options} onChange = {setCurrentFrom} defaultValue = {input}></Options>
            </td>
            <td>
                <Input onChange = {setCurrentPower} defaultValue = {power}/>
            </td>
            <td>
                <Options options = {options} onChange = {setCurrentTo} defaultValue = {output}/>
            </td>
        </tr>
    )
}

export default Current; 