import React from 'react';
import './notasMiniaturas.css';

export default function NotasMiniaturas(props){

    return(
        <div className="notas-item-content">
            <img src={props.img} alt="imagen_muestra"/>
            <div>
                <h3>{props.titulo}</h3>
                <p> {props.descShort} </p>
            </div>
        </div>
    )
}