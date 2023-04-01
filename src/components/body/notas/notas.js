import React, { useState,useEffect } from 'react';
import axios, * as others from 'axios';
import NotasMiniaturas from '../notasMiniaturas/notasMiniaturas';
import './notas.css';

export default function Notas(props){

    const [animationClass,setAnimationClass] = useState("notas-montar");
    const [notas,setNotas]                   = useState([]);
  

    const [data,setData] = useState({
        img:"https://res.cloudinary.com/practicaldev/image/fetch/s--l82BOzKA--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/i/rixan4h4z8y94eq89som.png",
        titulo:"Comando git",
        descShort:"Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente."
    });

    useEffect( ()=>{

        let componentesNotas = [];

        axios.get('http://localhost:8080/api/notas?desde=0&limite=20')//Añadir tabulacion - FALTA!
        .then( res=>{
            
            res.data.map(nota=>{
                componentesNotas =[...componentesNotas,  <NotasMiniaturas key={nota._id} id={nota._id} date={nota.date} img={ nota.miniaturas.imagen } titulo={ nota.miniaturas.titulo } descShort={ nota.miniaturas.descripcion } />];
            });

            setNotas( () => componentesNotas);
        })
        .catch( err => {
            console.log(err);
        }); 
    },[]);

    const goodbye = (n) => {   
        setAnimationClass("notas-desmontar");
        setTimeout(()=>{
            props.changed(n);
        },3000);
    }

    /* Peticion servidor */
   return( 
        <div className={` notas-page ${animationClass} `}>
            <menu>
                <li className="volver" onClick = { (e) => goodbye(0) }> Inicio </li>
                <li>&gt;</li>
                <li>notas</li>
            </menu>
            <h2>notas</h2>
            <div className="content-notas">
                {notas}
            </div>
        </div>
   )
   
}