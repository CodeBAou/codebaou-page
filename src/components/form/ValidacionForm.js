
import React from 'react';
import './validForm.css';

export default function ValidacionForm(props){
    
    const nameStyle = "styleValidacionForm"; //Estilo clase para css  

    const regExpData = {
        email:'',
        nombre:'',
        apellidos:''
    }

    const Empty = () => {

    }

    const HTML = (target) => {
        return target.checkValidity();
    }

    const NoScript = () => {

    }

    const NoMySQL = () => {

    }

    const Nonum = () => {

    }

    const Email = () => {

    }

    const objectFN = {
        style:nameStyle,
        check:{
            Native:HTML,
            NoEmpty:Empty,
            NoScript:NoScript,
            NoMysql:NoMySQL,
            NoNum:Nonum
        }
    }

    return(
       <>
            {props.render( objectFN )}
       </>
    )
}