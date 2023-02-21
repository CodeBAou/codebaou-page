import React, { useState, useEffect } from 'react';
import './proyectosMiniaturas.css';
import github_icon from './github.svg';
import visibilityOn from './visibility_on.svg';
import visibilityOff from './visibility_off.svg';
export default function ProyectosMiniaturas(props){

    const [data, setData] = useState({
        image:'',
        titulo:'titulo',
        descripcion:'descripcion',
    });
    
    useEffect( () => {
        //Insertar datos
        setData(props.data);
    });

    const verPage = () => {
        alert('Visualizar pagina');
    }

    return(
        <div className="proyecto-item-content" onClick={(e) => verPage((e))}>
            <div>
                <img src={props.img} alt="Imagen principal del proyecto"/>
                <h3>{props.titulo}</h3>
                <h4>{props.fecha}</h4>
                <h5>{props.tag}</h5>
            </div>

            <p>{props.descripcion}</p>
            
            <div className="icongithub">
                <a href={props.repo} target="_blank" onClick={(e)=>{ e.stopPropagation()}}> 
                    <img src={ github_icon } alt="icono de github"/>
                </a>
                <a href="#" target=""  >
                    <img src={visibilityOn} alt="icono Entrar al post" onClick={(e)=>{e.stopPropagation()}} />
                </a>
            </div>
        </div>
    )
} 
