import { useState } from "react";
const DataHouse = {
    'm^1 m^-1': 'Radian',
    'm^2 m^-2': 'Steradian',
    's^-1': 'Frequency, Hz',
    'm^1 kg^1 s^-2': 'Force, N',
    'm^-1 kg^1 s^-2' : 'Pressure / Stress (N^1 m^-2)',
    'm^2 kg^1 s^-2': 'Energy/ Quantity of Heat/ Work (N^1 m^1)',
    'm^2 kg^1 s^-3': 'Power/ Radiant Flux',
    's^1 amp^1': 'Coulumb (C)',
    'm^2 kg^1 s^-3 amp^-1': 'Electric Potential Difference/ Electromotive Force',
    'm^2 kg^-1 s^4 amp^2' : 'Capacitance',
    'm^2 kg^1 s^-3 amp^2' : 'Electric Resistance (ohm)',
    'm^2 kg^-1 s^3 amp^2': 'Electric Conductance (S, siemens)',
    'm^2 kg^1 s^-2 amp^-1' : 'Magnetic Flux (Wb,Weber)',
    'kg^1 s^-2 amp^-1': 'Magnetic Flux Density (T, tesla)',
    'm^2 kg^1 s^-2 amp^-2' : 'Inductance (H, henry)',
    'm^2 m^-2 cd^1' : 'Luminous Flux (lm, Lumen)',
    'm^-2 cd^1': 'Illuminance (lx, lux)',
     'm^1 s^-1' : 'Velocity (V)',
     'm^1 s^-2': 'Acceleration',
     'N^1 m^1': 'Moment Of Force',
     'N^1 m^-1': 'Surface Tension',
     'J^1 mol^-1': 'Molar Energy',
     'J^1 m^3': 'Enery Density',
     's^-1 mol^1': 'Katal (Kat)',
     'kg^1 m^-3': 'Density'
}

const useFinder = (inUnit) => {

    const [hint, setHint] = useState('')
    const DataHouseObject = Object.keys(DataHouse);

    function setOutPutHint(){
    if(DataHouseObject.includes(inUnit)){
        setHint(DataHouse[inUnit])
    }else{
        setHint('No Hint found!')
    }
    }

    return{
        hint,
        setOutPutHint,
        
    }

}
export default useFinder;