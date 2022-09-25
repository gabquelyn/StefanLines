import React from 'react';
import Options from '../UI/Options';
import useCreator from '../Hooks/use-Creator';
import Input from '../UI/input';


 const luminousIntensityData = {
    cd: {'cd': 1}}

const LuminousIntensity = (props) => {
    const options = Object.keys(luminousIntensityData);

    const {
        setIn: setLuminousIntensityFrom, 
        setOut: setLuminousIntensityTo, 
        setP: setLuminousIntensityPower,
        inSymbol: luminousIntensityFromUnit,
        outSymbol: luminousIntensityToUnit,
        conversion: luminousIntensityConversion,
        input,
        power,
        output  
        } = useCreator(luminousIntensityData, props.resetButtonIsClicked)
        
        props.setInItem(luminousIntensityFromUnit);
        props.setOutItem(luminousIntensityToUnit);
        props.setValue(luminousIntensityConversion);
    return(
        <tr>
            <td>Luminous Intensity</td>
            <td>
                <Options options = {options} onChange = {setLuminousIntensityFrom} defaultValue = {input}></Options>
            </td>
            <td>
                <Input onChange = {setLuminousIntensityPower} defaultValue = {power}/>
            </td>
            <td>
                <Options options = {options} onChange = {setLuminousIntensityTo} defaultValue = {output}/>
            </td>
        </tr>
    )
}

export default LuminousIntensity; 