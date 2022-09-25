import React from 'react';
import Options from '../UI/Options';
import useCreator from '../Hooks/use-Creator';
import Input from '../UI/input';
const timeData = {
    s: {'s': 1, 'min': 0.0167, 'hr': 2.78e-4},
    min: {'min': 1, 's': 60, 'hr': 0.0166667},
    hr: {'hr': 1, 'min': 60, 's': 3600}}

const Time = (props) =>{
    const options = Object.keys(timeData);

    const {
        setIn: setTimeFrom, 
        setOut: setTimeTo, 
        setP: setTimePower,
        inSymbol: timeFromUnit,
        outSymbol: timeToUnit,
        conversion: timeConversion,
        input,
        power,
        output
       } = useCreator(timeData, props.resetButtonIsClicked);


       props.setInItem(timeFromUnit);
       props.setOutItem(timeToUnit)
       props.setValue(timeConversion);
    return(
        <tr>
            <td>Time</td>
            <td>
                    <Options options = {options} onChange = {setTimeFrom} defaultValue = {input}/>
            </td>
            <td>
                <Input onChange = {setTimePower} defaultValue = {power}/>
            </td>
           <td>
                <Options options = {options} onChange = {setTimeTo} defaultValue = {output}/>
           </td>
        </tr>
    );
}

export default Time;