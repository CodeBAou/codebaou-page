import React, {useState} from 'react';
import './contacto-form-two.css';
import ButtonContacto from '../contacto-form/buttonContacto';
import RedesSociales from '../header/component-widget-redesSociales/redesSociales';
import regExpLib from '../../regExpLib-codeBAou';
import './validForm.css';


export default function ContactoFormTwo(){
    
    //Si un campo no es valido su valor es null
    const [nombre,setNombre]      = useState(null);
    const [mensaje,setMensaje]    = useState(null);
    const [email,setEmail]        = useState(null);
    const [ valid, setNoValid ] = useState(false);

    const ValNombre = () => {

    }

    const ValMensaje = () => {

    }

    const ValEmail = () => {

    }

    return (
       <div className="ContactoFormTwo">
            <form>
                <label for="nombre">Nombre</label>
                <input id="Nombre" name="nombre" className="formValidcss" type="text" onChange={ e => setNombre(e.target.value)} onBlur={ (e) => ValNombre(e) } required  maxlength="30"></input>
                <label for="mensaje">Mensaje</label>
                <textarea id="Mensaje" name="mensaje" className="formValidcss" onChange={ e => setMensaje(e.target.value) } onBlur={ (e) => ValMensaje(e) } required maxlength="650" ></textarea>
                <ButtonContacto/>
            </form>

            <div className="ContentR">
                <form for="email">
                    <label>Dejame un email donde poder responder...</label>
                    <input id="email" name="email" className="formValidcss" type="text" onChange={ e => setEmail(e.target.value)} onBlur={ (e) => ValEmail(e) } required pattern={regExpLib.Email}></input>
                </form>

                <p className="AvisoUsoDatos">Estos datos se utilizaran exclusivamente para responder a los mensajes recibidos, 
                nunca se almacenarán ni se utilizarán para otro fin...</p>
                
                <div className="Content-redes-sociales">
                    <RedesSociales validation={valid}/>
                </div>
            </div>
           
       </div>
    )
}