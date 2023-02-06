import React, {useState} from 'react';
import BtnSendApi from './BtnSendApi';
import ApiPedirEmail from '../Api/ApiPedirEmail';
import './PedirCV.css';

export default function PedirCV(props){

    const [vempresa,SetEmpresa]    = useState(null);
    const [vlinkedIn, SetLinkedIn] = useState(null);
    const [vurl, SetUrl]           = useState(null);
    const [vemail,SetEmail]        = useState(null);

    return(
       
            <form className = {`form-PedirCV `}>

                <label>Empresa</label>
                
                <input type="text" required onChange={ () => {
                    SetEmpresa(props.validform.check.native);
                }}></input>
                
                <label>Tu LinkedIn</label>
                
                <input type="url" required></input>
                
                <label>Un email donde enviar el Curriculum Vitae</label>
                
                <input type="email" required></input> 
                {/*falta componente peticion email*/}
                
                <ApiPedirEmail render = { obj => {
                    return <BtnSendApi obj = { obj } valid = { true } /> 
                }}/>
                
            </form>
       
    )
}