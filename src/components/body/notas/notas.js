import './notas.css';
import NotasMiniaturas from '../../notasMiniaturas/notasMiniaturas';
import { useState } from 'react';


export default function Notas(props){

    const [animationClass,setAnimationClass] = useState("notas-montar");

    const goodbye = (n) => {   
        setAnimationClass("notas-desmontar");
        setTimeout(()=>{
            props.changed(n);
        },3000);
        
    }

    /* Peticion servidor */
   return( 
        <div className={` notas-page ${animationClass}`}>
            <menu>
                <li className="volver" onClick = { (e) => goodbye(0) }> Inicio </li>
                <li>&gt;</li>
                <li>notas</li>
            </menu>

            <h2>notas</h2>

            <div className="content-notas">
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
                <NotasMiniaturas/>
            </div>
           
        </div>
   )
   
}