import './buttonContacto.css';
import React from 'react';
/*
Props 
   - validation: Funcion para validar , return boolean
*/

export default function ButtonContacto(props){

    const EnviaForm = (e) => {
        e.preventDefault();
        alert("enviado");
    }
    
    return(
        <button className="submitContacto"  onClick={ /* (e) => { EnviaForm(e)} */null } style={ (props.valido)? "display:none" : null } >Enviar</button>
    );
}