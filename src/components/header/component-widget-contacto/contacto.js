import React, { useState }  from 'react';
import './contacto.css';
import LogicVentana from './LogicVentana';
import ContactoFormTwo from '../../form/ContactoFormTwo';
import ValidacionForm from '../../form/ValidacionForm';

export default function Contacto(props){
    
    // 0  - close 
    // 1  - ventana con render contacto 
    // 2  - ventana con render pedirCV
    const [open,setOpen]   = useState(0);

    return (
        <div className="contacto-widget">

            <button className  = "buttom-widget" onClick = { () => {
                setOpen(2);
            } }>Pedir CV</button>

            <button className  = "buttom-widget" onClick = { () => { 
                setOpen(1);
            }}>Contacto</button>    

            {open == 1 && <LogicVentana setOpen={setOpen} render={ () => {
                return <ValidacionForm render={ validlib =>{
                    return <ContactoFormTwo validform={validlib}/>
                }}/>
            }}/>}

            {open == 2 && <LogicVentana setOpen={setOpen} render={ () => {
                return null
            }}/>}

            {/* Si open es diferente a 1 || 2 no se renderizará nada */}

        </div>
    );

}

/*

import VContacto from './VContacto';

*/