import './BtnSendApi.css';
import React, {useEffect} from 'react';
/*
Props 
   - validation: Funcion para validar , return boolean
*/

export default function BtnSendApi(props){
    
    useEffect( () => {

    }); 

    return(
        <button className="submitContacto"  onClick = { (props.valid) ? () => { props.obj() } : null } >Enviar</button>
    );
}