import React from 'react';
import Options from '../UI/Options';
import useCreator from '../Hooks/use-Creator';
import Input from '../UI/input';

const amountOfSubstanceData = {
    mol: {'mol': 1, 'atoms': 6.02e23},
    atoms:{'atoms': 1, 'mol': 1/6.02e23}}

const AmountOfSubstance = (props) => {
    const options = Object.keys(amountOfSubstanceData);

    const {
        setIn: setAmountOfSubstanceFrom, 
        setOut: setAmountOfSubstanceTo, 
        setP: setAmountOfSubstancePower,
        inSymbol: amountOfSubstanceFromUnit,
        outSymbol: amountOfSubstanceToUnit,
        conversion: amountOfSubstanceConversion,
        input,
        output,
        power  
        } = useCreator(amountOfSubstanceData, props.resetButtonIsClicked)
        
        props.setInItem(amountOfSubstanceFromUnit);
        props.setOutItem(amountOfSubstanceToUnit);
        props.setValue(amountOfSubstanceConversion);

    return(
        <tr>
            <td>Amount of substance</td>
            <td>
                <Options options = {options} onChange = {setAmountOfSubstanceFrom} defaultValue = {input}></Options>
            </td>
            <td>
                <Input onChange = {setAmountOfSubstancePower} defaultValue = {power}/>
            </td>
            <td>
                <Options options = {options} onChange = {setAmountOfSubstanceTo} defaultValue = {output}/>
            </td>
        </tr>
    )
}

export default AmountOfSubstance; 