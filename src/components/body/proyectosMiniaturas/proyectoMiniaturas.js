import React, { useState, useEffect } from 'react';
import './proyectosMiniaturas.css';

export default function ProyectosMiniaturas(props){

    const [data, setData] = useState({
        image:'',
        titulo:'titulo',
        descripcion:'descripcion',
    });
    
    useEffect( () => {
        //Insertar datos
        setData(props.data);
    });

    const verPage = () => {
        alert('Visualizar pagina');
    }

    return(
        <div className="proyecto-item-content">
            
        </div>
    )
} 
