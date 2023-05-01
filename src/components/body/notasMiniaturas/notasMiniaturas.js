import React, {useState,useEffect}from 'react';
import './notasMiniaturas.css';
import PostView from '../postView/PostView';

export default function NotasMiniaturas(props){

    const [date,setDate]          = useState();
    const [openPost,setOpenPost]  = useState(false);
    const [cmp,setCmp]            = useState([]); //Post View - componente
   
    useEffect(()=>{
        setCmp([]);
        //Se modifica la fecha para un visualizacion mas simple
        let dateO = new Date(props.date);
        let dateStr = `${dateO.getDate()} \/ ${dateO.getMonth()+1}  \/ ${dateO.getFullYear()}`;
        setDate( () => dateStr );
    },[]);

    const setClose = () => {  setCmp(()=>[]); console.log("click close") };
    const setOpen = () => {  setCmp([...cmp,<PostView idMiniatura={props.idMiniatura} key={`key-${props.idMiniatura}`} open={true} close={setClose}/>]); };
       
    return(
        <>
            <div className={`notas-item-content`} onClick={()=>{
                    setOpen();
            }}>
                <img  className={`d `} src={props.img} alt="imagen_muestra" />
                <div>
                    <h3>{props.titulo}</h3>
                    <h4>{date}</h4>
                    <p> {props.descShort} </p>
                </div>
    
            </div>
            {cmp}
        </>
            
        );
}