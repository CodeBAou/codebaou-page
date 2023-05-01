import React, { useState, useEffect } from 'react';
import './proyectosMiniaturas.css';
import github_icon from './github.svg';
import visibilityOn from './visibility_on.svg';
import visibilityOff from './visibility_off.svg';
import PostView from '../postView/PostView';


export default function ProyectosMiniaturas(props){

    let dateO = new Date(props.fecha);
    const [data,setData] =useState([]);
    const [date,setDate] = useState();
    const [cmp,setCmp]  = useState([]);

    useEffect( () => {
        setCmp([]);
        //Modificar fecha para una visualizacion mas simple
        let date0 = new Date(props.data_publicacion);
        let dateStr = `${date0 .getDate()} \/ ${date0 .getMonth()+1}  \/ ${date0 .getFullYear()}`;
        setDate( () => dateStr );

        //Insertar datos
        setData(props.data);
    },[]);


    const setClose = () => {  setCmp(()=>[]);  };
    const setOpen = () => {   
        setCmp([...cmp,<PostView idMiniatura={props.idMiniatura} data={props.data} key={`key-${props.idMiniatura}`} open={true} close={setClose}/>]); 
    };

    return(
        <>
        <div className="proyecto-item-content" >
            <div>
                <img src={props.img} alt="Imagen principal del proyecto"/>
                <h3>{props.titulo}</h3>
                <h4>{date}</h4>
                <h5>{props.tag}</h5>
            </div>

            <p>{props.descripcion}</p>
            
            <div className="icongithub">
                <a href={props.repo} target="_blank" onClick={(e)=>{ e.stopPropagation()}}> 
                    <img src={ github_icon } alt="icono de github"/>
                </a>
                
                <img   className="icon-ver" src={visibilityOn} alt="icono Entrar al post" onClick={ ()=>{
                 
                    setOpen();
                }}/>
                
            </div>
        </div>
         {cmp}
        </>
    )
} 
