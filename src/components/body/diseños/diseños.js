import './diseños.css';
import DiseñosMiniaturas from '../diseñosMiniaturas/diseñosMiniaturas';
import { useState } from 'react';


export default function Diseños(props){

    const [animationClass,setAnimationClass] = useState("diseño-montar");

    const [goodbyecontrol,setgoodbyecontrol] = useState(false);

    const goodbye = (n) => {   
        setAnimationClass("diseño-desmontar");
        setTimeout(()=>{
            props.changed(n);
        },3000);
        
    }

    /* Peticion servidor */
   return( 
        <div className={` diseño-page ${animationClass}`}>
            <menu>
                <li className="volver" onClick = { (e) => goodbye(0) }> Inicio</li>
                <li>&gt;</li>
                <li>Diseños</li>
            </menu>

            <h2>Diseños</h2>

            <div className="content-diseños">
                <DiseñosMiniaturas/>
                <DiseñosMiniaturas/>
                <DiseñosMiniaturas/>
                <DiseñosMiniaturas/>
                <DiseñosMiniaturas/>
                <DiseñosMiniaturas/>
                <DiseñosMiniaturas/>
                <DiseñosMiniaturas/>
                <DiseñosMiniaturas/>
                <DiseñosMiniaturas/>
            </div>
           
        </div>
   )
   
}
