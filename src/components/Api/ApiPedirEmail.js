import React from 'react';

export default function ApiPedirCV(props){

    const obj = {
        send: ( data ) => {
             //Enviar contacto
             alert("send apiContacto");
        }
     }
 

    return (
        props.render(obj)
    )
}