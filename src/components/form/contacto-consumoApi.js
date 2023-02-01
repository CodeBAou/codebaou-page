import { useState} from "react";

export default function Consumo_Api_Contacto(props){
    
    let [data,setData] = useState(null);
    
    
    return(
        <>
            {props.render.data}
        </>
    )


}