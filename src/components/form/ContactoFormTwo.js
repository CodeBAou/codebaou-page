import React, {useState} from 'react';
import './contacto-form-two.css';
import BtnSendApi from './BtnSendApi';
import RedesSociales from '../header/component-widget-redesSociales/redesSociales';
import regExpLib from '../../regExpLib-codeBAou';
import ApiContacto from '../Api/ApiContacto';
import './validForm.css';


export default function ContactoFormTwo(props){
    
    //Si un campo no es valido su valor es null
    const [nombre,setNombre]      = useState(null);
    const [mensaje,setMensaje]    = useState(null);
    const [email,setEmail]        = useState(null);
    const [validNombre, setValidNombre ] = useState(false);
    const [validEmail, setValidEmail]    = useState(false);
    const [validMensaje, setValidMensaje] = useState(false);

    return (
       <div className="ContactoFormTwo">
            
            <form className={ props.validform.style } >
                
                <label for="nombre">Nombre</label>
                
                <input id="Nombre" name="nombre" className="formValidcss" type="text" onChange={ e => setNombre(e.target.value)} required   onBlur={ (e) =>{
                    setValidNombre( props.validform.check.Native(e.target) );
                }  }></input>
                
                <label for="mensaje">Mensaje</label>
                
                <textarea id="Mensaje" name="mensaje" className="formValidcss" onChange={ e => setMensaje(e.target.value) } required  onBlur={ (e) => {
                    setValidMensaje( props.validform.check.Native(e.target) );
                }}></textarea>
                
                <ApiContacto render = { obj => {
                    return <BtnSendApi obj = { obj.send } valid = { (validEmail && validMensaje) ? true : false }/>
                } }/>
                
            </form>

            <div className="ContentR">
                
                <form for="email" className = { props.validform.style } >
                    
                    <label>Dejame un email donde poder responder...</label>
                    
                    <input id="email" name="email" className="formValidcss" type="email" onChange={ e => setEmail(e.target.value)} required pattern={regExpLib.Email} onBlur={ (e) => {
                        setValidEmail(props.validform.check.Native(e.target));
                    }}></input>
                
                </form>

                <p className="AvisoUsoDatos">Estos datos se utilizaran exclusivamente para responder a los mensajes recibidos, 
                nunca se almacenarán ni se utilizarán para otro fin...</p>
                
                <div className="Content-redes-sociales">
                    <RedesSociales />
                </div>
            </div>
           
       </div>
    )
}