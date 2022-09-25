import {useState, useEffect} from "react";

const useCreator = (Data, resetButtonIsClicked) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [power, setPower] = useState('');
    
    const setIn = (event) =>{
       setInput(event.target.value); 
    }

    const setOut = (event) => {
        setOutput(event.target.value);
    }

    const setP = (event) => {
        setPower(event.target.value);
    }

    let conversion;
    let outSymbol;
    let inSymbol;
    let caret  = '^';
    let convertValue;
    // const carret = power !== '' ? '^' : '';
    
    
        
    if(input !== '' && output !== '' && input !== 'None' && output !== 'None'){
        
        // if(forTemp){
        //     if(isNaN(forTemp)){
        //         convertValue = Data[input][output](1);
        //     }
        //     convertValue = Data[input][output](forTemp);

        // }else{
            convertValue = Data[input][output];
        
        
        if(power === ''){
            conversion = convertValue**1;
            
        }else{
            conversion = (convertValue)**power;
        }
        
        inSymbol = `${input}${caret}${power}`;
        outSymbol = `${output}${caret}${power}`;// giveout these later on

    }

    if(input !== '' && input !== 'None' ){
        if(power === ''){
            inSymbol = `${input}${caret}1`;
        }else{
            inSymbol = `${input}${caret}${power}`;
        }
    }
    if(output !== '' && output !== 'None' ){
        if(power === ''){
            outSymbol = `${output}${caret}1`;
        }else{
            outSymbol = `${output}${caret}${power}`;
        }
    }

    useEffect(() => {
        if(resetButtonIsClicked){
            setInput('None')
            setOutput('None')
            setPower('');
        }
    }, [resetButtonIsClicked, setInput, setOutput, setPower])

    return{
        setIn,
        setOut,
        setP,
        inSymbol,
        outSymbol,
        conversion,
        input,
        output,
        power
    }
    
}


export default useCreator;