import React from 'react';
import BtnSendApi from './BtnSendApi';
import './PedirCV.css';


export default function PedirCV(){

    return(
       
            <form className="form-PedirCV">
                <label>Empresa</label>
                <input type="text"></input>
                <label>Tu LinkedIn</label>
                <input type="url"></input>
                <label>Un email donde enviar el Curriculum Vitae</label>
                <input type="email"></input>
              
            </form>
       
    )
}