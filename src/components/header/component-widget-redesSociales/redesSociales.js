import React from 'react';
import './redesSociales.css';
import github_icon from './icons/github.svg';
import email_icon from './icons/email.svg';
export default function RedesSociales(){

    let url_github="https://github.com/CodeBAou";
    
    const getEmail = () => {
        //Peticion Api - obtener url y email
        return "borisafuy@gmail.com";
    }

    return(
        <>
            <a href={url_github} className="RedesSociales-widget" target="_blanc">
                <img src={github_icon} alt="icono github" ></img>
            </a>
            <a href={null} className="RedesSociales-widget widgetCol" >
                <img src={email_icon} alt="icono " ></img>
                <span>{getEmail()}</span>
            </a>
            
        </>
       
    );
}