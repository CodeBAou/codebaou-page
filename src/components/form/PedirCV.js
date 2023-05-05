import React, {useState} from 'react';
import BtnSendApi from './BtnSendApi';
import ApiPedirEmail from '../Api/ApiPedirCV';
import './PedirCV.css';

export default function PedirCV(props){

    const [vempresa,SetEmpresa]    = useState(null);
    const [vlinkedIn, SetLinkedIn] = useState(null);
    const [vemail,SetEmail]        = useState(null);

   
   
    return(
        <ApiPedirEmail render = { obj => {
            return <form className = {`form-PedirCV `}>

                <label>Empresa</label>
                
                <input type="text" required onChange={ (e) => {
                    SetEmpresa( () => e.target.value);
                }}></input>
                
                <label>Tu LinkedIn</label>
                
                <input type="url" required onChange={ (e) => {
                     SetLinkedIn( () => e.target.value)
                }}></input>
                
                <label>Un email donde enviar el Curriculum Vitae</label>
                
                <input type="email" required onChange={(e)=>{
                    SetEmail( () => e.target.value);
                }}></input> 
            
                <BtnSendApi obj = { obj } data={
                  {
                        empresa:vempresa,
                        linkedIn:vlinkedIn,
                        email:vemail
                }}/>
            </form>
        }}/>
       
    )
}