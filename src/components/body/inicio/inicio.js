import {useState, useEffect} from 'react';
import './inicio.css';


export default function Inicio(props){

   
    const [animationClass,setAnimationClass] = useState("inicio-montar");
    const [goodbyecontrol,setgoodbyecontrol] = useState(false);

    const goodbye = (n) => {   
        setAnimationClass("inicio-desmontar");
        setTimeout(()=>{
            props.changed(n);
        },3000);
        
    }

    return(

        <div className="fondo-menu-inicio" >
            <>
                <div className = { animationClass } onClick = { (e) => goodbye(1) }  onAnimationEnd = { () => setgoodbyecontrol(true) } > <h2> Diseños   </h2> </div>
                <div className = { animationClass } onClick = { (e) => goodbye(2) }  onAnimationEnd = { () => setgoodbyecontrol(true) } > <h2> Notas     </h2> </div>
                <div className = { animationClass } onClick = { (e) => goodbye(3) }  onAnimationEnd = { () => setgoodbyecontrol(true) } > <h2> Proyectos </h2> </div>
                <div className = { animationClass } onClick = { (e) => goodbye(4) }  onAnimationEnd = { () => setgoodbyecontrol(true) } > <h2> Contacto  </h2> </div>
            </>
            
        </div>
            
    )


}