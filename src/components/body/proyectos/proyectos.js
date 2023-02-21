import React, {useState} from 'react';
import './proyectos.css';
import ProyectosMiniaturas from '../proyectosMiniaturas/proyectoMiniaturas';

export default function Proyectos(props){

    const [animationClass,setAnimationClass] = useState("proyectos-montar");
    const [data,setData] = useState({
        titulo:null,
        img:null,
        tag:null,
        descripcion:null,
        data_publicacion:null
    });
   
    
    const goodbye = (n) => {   
        setAnimationClass("proyectos-desmontar");
        setTimeout(()=>{
            props.changed(n);
        },3000);  
    }

    const ejemploText= "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, consecteur, en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de de Finnibus Bonorum et Malorum (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, Lorem ipsum dolor sit amet.., viene de una linea en la sección 1.10.32";
    /* Peticion servidor */
    // Datos para peticion
    
   return( 
        <div className={` proyectos-page ${animationClass}`}>

            <menu>
                <li className="volver" onClick = { (e) => goodbye(0) }> Inicio</li>
                <li>&gt;</li>
                <li>proyectos</li>
            </menu>

            <h2>proyectos</h2>

            <div className="content-proyectos">
                <ProyectosMiniaturas img = {"https://github.com/CodeBAou/Archito/raw/main/img-readme/menuEj1.png"} titulo = {"Archito, un script de mantenimiento para arch"} fecha={"21-2-2023"} tag={"bash Scriting"} descripcion={ejemploText} repo={"https://github.com/CodeBAou/Archito"}>1</ProyectosMiniaturas>
                <ProyectosMiniaturas img = {"https://github.com/CodeBAou/Archito/raw/main/img-readme/menuEj1.png"} titulo = {"Archito, un script de mantenimiento para arch"} fecha={"21-2-2023"} tag={"bash Scriting"} descripcion={ejemploText} repo={"https://github.com/CodeBAou/Archito"}>1</ProyectosMiniaturas>
                <ProyectosMiniaturas img = {"https://github.com/CodeBAou/Archito/raw/main/img-readme/menuEj1.png"} titulo = {"Archito, un script de mantenimiento para arch"} fecha={"21-2-2023"} tag={"bash Scriting"} descripcion={ejemploText} repo={"https://github.com/CodeBAou/Archito"}>1</ProyectosMiniaturas>
                <ProyectosMiniaturas img = {data.img} titulo = {data.titulo} data_publicacion = {data.data_publicacion} tag = {data.tag} descripcion = {data.descripcion}>4</ProyectosMiniaturas>
            </div>
           
        </div>
   )
   
}
