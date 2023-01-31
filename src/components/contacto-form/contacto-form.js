import React,{ useEffect, useState} from 'react';
import './contacto-form.css';


export default function ContactoForm(props){
    
    let [goodbay,setGoodbay]    = useState(null);
    let [hidden,setHidden]      = useState('hidden');
    let [emisor, setEmisor]     = useState('');
    let [mensaje, setMensaje]   = useState('');

    useEffect( ()=>{
        setTimeout( () => {
             setHidden(null);
             window.clearInterval(this);
        }, 4000);
    });

    const onChangeMensaje = (e) => {
        setMensaje(''+e.target.value);
    }

    const Send = (e)=>{
        alert("mensaje enviado"); //Completar
    }

    return(
        <div className= {`formContacto ${props.styleForm} ${goodbay} ${hidden} ${props.mostrar}`} >
            <form >
                <label> Dime quien eres... </label>
                <input type="text"  />
                <label>Dejame tu mensaje, lo responderé :&#41; ...</label>
                <textarea onChange={(e) => {onChangeMensaje(e)}} value={mensaje}></textarea>
                <input type="button" value="Enviar" className="submit" onClick={(e)=>{Send(e)}}/>
            </form>
        </div>    
    )
}