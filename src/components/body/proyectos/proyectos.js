import React, {useState,useEffect} from 'react';
import axios, * as others from 'axios';
import './proyectos.css';
import ProyectosMiniaturas from '../proyectosMiniaturas/proyectoMiniaturas';
import {cu_proyectos, cu_part_pagination} from '../../../config';

export default function Proyectos(props){

    const ejemploText= "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, consecteur, en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de de Finnibus Bonorum et Malorum (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, Lorem ipsum dolor sit amet.., viene de una linea en la sección 1.10.32";
    const [animationClass,setAnimationClass] = useState("proyectos-montar");
    const [proyectos, setProyectos] = useState([]);

 

    useEffect(()=>{

        let componentesProyectos = [];
       
        axios.get(`https://codebaou-page-backend-2199s1lj0-codebaou.vercel.app/api/proyectos?desde=0&limite=10`) //Añadir tabulacion - FALTA!
        .then( res => {

            res.data.map(proyectoData => {
                componentesProyectos = [...componentesProyectos, <ProyectosMiniaturas key={"key"+proyectoData._id} id={proyectoData._id} img = {proyectoData.miniaturas.imagen} titulo = {proyectoData.miniaturas.titulo} data_publicacion = {proyectoData.date} tag = {proyectoData.miniaturas.tag} descripcion = {proyectoData.miniaturas.descripcion}>4</ProyectosMiniaturas>];
            });

            setProyectos(componentesProyectos);

        })
        .catch( err => {
            console.log(err);
        });

    },[]);

    const goodbye = (n) => {   
        setAnimationClass("proyectos-desmontar");
        setTimeout(()=>{
            props.changed(n);
        },3000);  
    }

   return( 
        <div className={` proyectos-page ${animationClass}`}>

            <menu>
                <li className="volver" onClick = { (e) => goodbye(0) }> Inicio</li>
                <li>&gt;</li>
                <li>proyectos</li>
            </menu>

            <h2>proyectos</h2>

            <div className="content-proyectos">
                {proyectos}
            </div>
           
        </div>
        
   )
   
}
