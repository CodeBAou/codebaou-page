import {useEffect,useState} from 'react';
import './inicio.css';
import video from '../video-Fondo.mp4';
import Diseños from '../diseños/diseños';//componente page Diseños [ se carga]
import Notas from '../notas/notas'; //componentes Notas [ se carga ]
import Proyectos from '../proyectos/proyectos'; // componentes Proyecto [ se carga ]
import Contactos from '../contacto/contacto';

//<li className = "menu-volver"  > &lt; </li>
/*
<nav className="Menu-codebaou-1">   
    <menu>
        <li> Diseños   </li>
        <li> Proyectos </li>
        <li> Notas     </li>
        <li> Contacto  </li>
    </menu>
</nav>

<div> </div>
<div> </div>
<div> </div>
<div> </div>

*/



export default function Inicio(props){

    const [cmp,setCmp] = useState('I');
    const [animationClass,setAnimationClass] = useState("montar");

    const CargaMenu = (name) => {
        setAnimationClass("desmontar");
        setTimeout(()=>{
            setCmp(name);
        },3000);     
    }

    return(

        <div className="fondo-menu-inicio">
            { cmp == 'I'?
                <>
                    <div className = {animationClass} onClick = { (e) => CargaMenu('D') } > <h2> Diseños   </h2> </div>
                    <div className = {animationClass} onClick = { (e) => CargaMenu('P') } > <h2> Proyectos </h2> </div>
                    <div className = {animationClass} onClick = { (e) => CargaMenu('N') } > <h2> Notas     </h2> </div>
                    <div className = {animationClass} onClick = { (e) => CargaMenu('C') } > <h2> Contacto  </h2> </div>
                </>
                :null
            }
            
            { cmp == 'D' ? <Diseños/>   : null }
            { cmp == 'P' ? <Proyectos/> : null }
            { cmp == 'N' ? <Notas/>     : null } 
            { cmp == 'C' ? <Contactos/> : null } 

            <video muted playinline="true" loop autoPlay="autoplay">
                <source src={video} type="video/mp4" ></source>
            </video>

        </div>
       
    )
}