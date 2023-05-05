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
           
            if(props.valid && props.data.linkedInt == undefined){ 
               const result = props.obj.send(props.data); 
            }
            else{
               const result = props.obj.send({
                  empresa:props.data.empresa,
                  linkedIn:props.data.linkedIn,
                  email:props.data.email
               });
            }

         } } >Enviar</button>
    );
}