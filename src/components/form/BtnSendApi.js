import './BtnSendApi.css';
import React, {useEffect} from 'react';
/*
Props 
   - validation: Funcion para validar , return boolean
*/

export default function BtnSendApi(props){
    
    return(
        <button className="submitContacto"  onClick = { e => {

            e.preventDefault();
            
            if(props.valid){ 
               props.obj.send(); 
            }
          

         } } >Enviar</button>
    );
}