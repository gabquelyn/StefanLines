import React from 'react';
import Options from './Options';

const prefix = {
    Kilo: {'symbol': 'K', 'value': 1e3},
    Mega: {'symbol': 'M', 'value': 1e6},
    Giga: {'symbol': 'G', 'value': 1e9},
    Centi : {'symbol': 'c', 'value': 1e-2},
    Milli: {'symbol': 'm', 'value': 1e-3},
    Micro : {'symbol' : 'μ', 'value': 1e-6}
}
    

const Prefix = () => {
    const options = Object.keys(prefix);

    return(
        <Options options = {options} none = {`Prefix`}></Options>
    );
}

export default Prefix;