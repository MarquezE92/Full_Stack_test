import React from 'react';
import { ButtonProps } from '../types';
const ButtonComponent: React.FC<ButtonProps>= ({label, isOn, handleClick})=>{
    return(
        <button className={isOn? '' : 'inactiveButton'} onClick={isOn?handleClick : ()=>{}}>{label}</button>
    )
}

export default ButtonComponent