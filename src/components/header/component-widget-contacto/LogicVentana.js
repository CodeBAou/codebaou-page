import React, {useEffect, useState, createRef} from 'react';
import './LogicVentana.css';

export default function LogicVentana(props){

    const padre = createRef();
    /* Posicion raton y div */
    const [divPosition, setDivPosition] = useState({
       x: 0,
       y: 0
    });

    const [ active, setActive] = useState(false);
    
    function Prepare(e){
        let propertyX = window.getComputedStyle(padre.current).getPropertyValue("left");
        let propertyY = window.getComputedStyle(padre.current).getPropertyValue("top");
        let xx = parseInt( e.clientX /2 );
        let yy = parseInt( e.clientY /2);
        return {x:xx,y:yy};
    }

    function Move(e){

        setDivPosition(Prepare(e));
        e.stopPropagation();
        e.preventDefault();
      
        if( active ){
            setDivPosition(Prepare(e));
            padre.current.style.left = divPosition.x+"px";
            padre.current.style.top  = divPosition.y+"px";  
        }
    }
   
    function Soltar(e){
        e.preventDefault();
        e.stopPropagation();
        setActive( false );
    }

    function close(){
        props.setOpen( false );
    }

    return ( 

        <div 
            className="LogicVentana" 
            id="LV" 
            ref={padre}
            onMouseMove = { (e) => { Move(e)   }}
            onMouseUp   = { (e) => { Soltar(e) }}
            >
            
            <div className  = "header"
            onMouseDown = { (e) => { setActive(true)  }}
            onMouseUp   = { (e) => { Soltar(e) }}
            >
                <button 
                    onClick={close}
                >X</button>

            </div>

            <div className="content">
                { props.render() } {/*Determina donde se colocara el componente pasado por render props */}
            </div>
        </div>
    )
   
}

/*
 
*/