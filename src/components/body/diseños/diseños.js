import React, { useState, useEffect} from 'react';
import axios, * as others from 'axios';
import './diseños.css';
import DiseñosMiniaturas from '../diseñosMiniaturas/diseñosMiniaturas';
import { cu_diseños, cu_part_pagination, cu_host, headers} from '../../../urlAmiga';

export default function Diseños(props){

    const [animationClass,setAnimationClass] = useState("diseño-montar");
    const [goodbyecontrol,setgoodbyecontrol] = useState(false);
    const [diseños,setDiseños] = useState([]);//Componentes con los datos
    
    const goodbye = (n) => {   
        setAnimationClass("diseño-desmontar");
        setTimeout(()=>{
            props.changed(n);
        },3000);
    }

    useEffect(()=>{

            axios.get(`${cu_diseños}${cu_part_pagination(0,10)}`, headers ).then( res => {
               
                res.data.diseños.map(diseño=>{
                    console.log(diseño);
                    setDiseños([...diseños,
                        <DiseñosMiniaturas 
                            id     = {diseño._id}
                            data   = {diseño.date}
                            tag    = {diseño.tag}
                            large  = {diseño.miniaturas.large} 
                            short1 = {diseño.miniaturas.short1} 
                            short2 = {diseño.miniaturas.short2} 
                            short3 = {diseño.miniaturas.short3}
                        />    
                    ]);
                });
            }).catch( err => console.log(err));
    },[]);//El segundo parametro de useEffect --> Importante!   [dependencias de useEffect] - controlar cuando se ejecuta useEffect

    /* Peticion servidor */
   return( 
        <div className={` diseño-page ${animationClass}`}>
            <menu>
                <li className="volver" onClick = { (e) => goodbye(0) }> Inicio</li>
                <li>&gt;</li>
                <li>Diseños</li>
            </menu>

            <h2>Diseños</h2>

            <div className = "content-diseños">
               {diseños}
            </div>    
        </div>
   )
   
}
