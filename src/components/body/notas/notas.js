import React, { useState,useEffect } from 'react';
import axios, * as others from 'axios';
import NotasMiniaturas from '../notasMiniaturas/notasMiniaturas';
import './notas.css';
import {cu_notas, cu_part_pagination} from '../../../urlAmiga';

export default function Notas(props){

    const [animationClass,setAnimationClass] = useState("notas-montar");
    const [notas,setNotas]                   = useState([]);

    useEffect( ()=>{

        let componentesNotas = [];

        axios.get(`${cu_notas}${cu_part_pagination(0,10)}`)//Añadir tabulacion en pagination - FALTA!
        .then( res=>{
            
            res.data.map(nota=>{
                componentesNotas =[...componentesNotas,  <NotasMiniaturas key={nota._id} idMiniatura={nota._id} date={nota.date} img={ nota.miniaturas.imagen } titulo={ nota.miniaturas.titulo } descShort={ nota.miniaturas.descripcion } />];
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