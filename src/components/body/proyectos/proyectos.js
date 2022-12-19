import {useState} from 'react';
import './proyectos.css';
import ProyectosMiniaturas from '../proyectosMiniaturas/proyectoMiniaturas';

export default function Proyectos(props){

    const [animationClass,setAnimationClass] = useState("proyectos-montar");

 

    const goodbye = (n) => {   
        setAnimationClass("proyectos-desmontar");
        setTimeout(()=>{
            props.changed(n);
        },3000);
        
    }

    /* Peticion servidor */

   return( 
        <div className={` proyectos-page ${animationClass}`}>
            <menu>
                <li className="volver" onClick = { (e) => goodbye(0) }> Inicio</li>
                <li>&gt;</li>
                <li>proyectos</li>
            </menu>

            <h2>proyectos</h2>

            <div className="content-proyectos">
                <ProyectosMiniaturas>1</ProyectosMiniaturas>
                <ProyectosMiniaturas>2</ProyectosMiniaturas>
                <ProyectosMiniaturas>3</ProyectosMiniaturas>
                <ProyectosMiniaturas>4</ProyectosMiniaturas>
            </div>
           
        </div>
   )
   
}
