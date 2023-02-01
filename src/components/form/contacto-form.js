import React,{ useEffect, useState} from 'react';
import './contacto-form.css';


export default function ContactoForm(props){
    
    let [goodbay,setGoodbay]    = useState(null);
    let [hidden,setHidden]      = useState('hidden');
    let [emisor, setEmisor]     = useState('');
    let [mensaje, setMensaje]   = useState('');
    let [validEmail,setValidEmail]      = useState(false);
    let [validMensaje, setValidMensaje] = useState(false);

    useEffect( ()=>{
        setTimeout( () => {
             setHidden(null);
             window.clearInterval(this);
        }, 4000);
    });

    const onChangeEmisor = (e) =>{
        setEmisor(e.target.value);
    }

    const onChangeMensaje = (e) => {
        setMensaje(e.target.value);
    }

    const Send = (e)=>{
        return new Promise( (resolve, reject )=>{

            if(validEmail && validMensaje){
                resolve(
                    alert("formulario valido")
                );
            }else{
                reject(
                    alert("formulario no valido")
                )
            }
            //ENvia emisor y mensaje
            
           
       });
       
      
    }
    
    return(
        <div className= {`formContacto ${props.styleForm} ${goodbay} ${hidden} ${props.mostrar}`} >
            <form className={props.validLib.style}>
                <label> Dejame un email para responderte </label>
                <input type="email" onChange={(e) => {onChangeEmisor(e)}} required value={emisor} onBlur={ (e) => { 
                   setValidEmail(props.validLib.check.Native(e.target));
                }}/>
                <label>Dejame tu mensaje, lo responderé :&#41; ...</label>
                <textarea onChange={ (e) => { onChangeMensaje(e)} } value={mensaje} required onBlur={(e) => {
                    setValidMensaje(props.validLib.check.Native(e.target));
                }}></textarea>
                <input type="button" value="Enviar" className="submit" onClick={ (e)=>{ Send(e) } }/>
            </form>  
        </div>  
    )
}

