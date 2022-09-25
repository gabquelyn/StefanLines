import React from 'react';
import Options from '../UI/Options';
import useCreator from '../Hooks/use-Creator';
import Input from '../UI/input';


 const energyData = {
    eV: {'eV': 1, 'J': 1.602e-19},
    J: {'J': 1, 'eV': 6.242e+18}}

const Energy = (props) => {
    const options = Object.keys(energyData);

    const {
        setIn: setEnergyFrom, 
        setOut: setEnergyTo, 
        setP: setEnergyPower,
        inSymbol: energyFromUnit,
        outSymbol: energyToUnit,
        conversion: energyConversion,
        input,
        power,
        output 
        } = useCreator(energyData, props.resetButtonIsClicked)
        

        props.setInItem(energyFromUnit);
        props.setOutItem(energyToUnit);
        props.setValue(energyConversion);
    return(
        <tr>
            <td>Energy</td>
            <td>
                <Options options = {options} onChange = {setEnergyFrom} defaultValue = {input}></Options>
            </td>
            <td>
                <Input onChange = {setEnergyPower} defaultValue = {power}/>
            </td>
            <td>
                <Options options = {options} onChange = {setEnergyTo} defaultValue = {output}/>
            </td>
        </tr>
    )
}

export default Energy; 