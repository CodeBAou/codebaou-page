import React from 'react';
import './diseñosMiniaturas.css';

const ImgC=(props)=>{
    return <img src={props.url} alt="imagen-diseño"/>;
}

export default function DiseñosMiniaturas(props){

  

    return(
        <div className="diseño-item-content">
            
            <div className="large-image">
                <ImgC url = {props.large}/>
            </div>

            <div className = "short-images">
                <ImgC url = {props.short1}/>
                <ImgC url = {props.short2}/>
                <ImgC url = {props.short3}/>
            </div>
        </div>
    )
}