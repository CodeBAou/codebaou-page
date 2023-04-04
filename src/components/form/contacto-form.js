import React,{ useEffect, useState, createRef} from 'react';
import './contacto-form.css';
import BtnSendApi from './BtnSendApi';
import ApiContacto from '../Api/ApiContacto';

export default function ContactoForm(props){
    
    let [goodbay,setGoodbay]            = useState("");
    let [hidden,setHidden]              = useState('hidden');
    let [validEmail,setValidEmail]      = useState(false);
    let [validMensaje, setValidMensaje] = useState(false);
    const refEmisor                     = createRef();
    const refMensaje                    = createRef();

    const [dataForm,setDataForm]        = useState({
        emisor:"",
        mensaje:"",
    });

    useEffect( ()=>{

        setTimeout( () => {
             setHidden("");
             window.clearInterval(this);
        }, 4000);

    });

    const onChangeEmisor = (e) =>{
        setDataForm({
            ...dataForm,
            emisor: e.target.value
        });
    }

    const onChangeMensaje = (e) => {
        console.log(e);
        setDataForm({
            ...dataForm,
            mensaje: e.target.value
        });
    }

    
    return(
        <div className= {`formContacto ${props.styleForm} ${goodbay} ${hidden} ${props.mostrar}`} >
            <form className={props.validLib.style}>
                
                <label> Dejame un email para responderte </label>
                
                <input ref={refEmisor} type="email" onChange={(e) => {onChangeEmisor(e)}} required value={dataForm.emisor} onBlur={ (e) => { 
                   setValidEmail(props.validLib.check.Native(e.target));
                }}/>
                
                <label> Dejame tu mensaje, lo responderé :&#41; ... </label>
                
                <textarea ref={refMensaje} onChange={ (e) => { onChangeMensaje(e)} } value={dataForm.mensaje} required onBlur={(e) => {
                    setValidMensaje( props.validLib.check.Native(e.target) );
                }}></textarea>

                <ApiContacto render = { obj => {
                    return <BtnSendApi obj = { obj } valid = { ( validEmail && validMensaje ) ? true : false }  data = {dataForm}/>
                } }/>
                
            </form>  
        </div>  
    )
}

