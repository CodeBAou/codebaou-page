import React, { useState } from 'react';
import './diseños.css';
import DiseñosMiniaturas from '../diseñosMiniaturas/diseñosMiniaturas';

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

            <div className = "content-diseños">
               
            <DiseñosMiniaturas 
                large  = {"https://i.pinimg.com/564x/1c/c0/07/1cc007fe5efccb28aa27777799912e60.jpg"} 
                short1 = {"https://i.pinimg.com/564x/0b/be/75/0bbe75e176b3b6c9884dbfd5bc59b519.jpg"} 
                short2 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"} 
                short3 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"}
            />

            <DiseñosMiniaturas 
                large  = {"https://i.pinimg.com/564x/1c/c0/07/1cc007fe5efccb28aa27777799912e60.jpg"} 
                short1 = {"https://i.pinimg.com/564x/0b/be/75/0bbe75e176b3b6c9884dbfd5bc59b519.jpg"} 
                short2 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"} 
                short3 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"}
            />

            <DiseñosMiniaturas 
                large  = {"https://i.pinimg.com/564x/1c/c0/07/1cc007fe5efccb28aa27777799912e60.jpg"} 
                short1 = {"https://i.pinimg.com/564x/0b/be/75/0bbe75e176b3b6c9884dbfd5bc59b519.jpg"} 
                short2 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"} 
                short3 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"}
            />

            <DiseñosMiniaturas 
                large  = {"https://i.pinimg.com/564x/1c/c0/07/1cc007fe5efccb28aa27777799912e60.jpg"} 
                short1 = {"https://i.pinimg.com/564x/0b/be/75/0bbe75e176b3b6c9884dbfd5bc59b519.jpg"} 
                short2 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"} 
                short3 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"}
            />
            
            <DiseñosMiniaturas 
                large  = {"https://i.pinimg.com/564x/1c/c0/07/1cc007fe5efccb28aa27777799912e60.jpg"} 
                short1 = {"https://i.pinimg.com/564x/0b/be/75/0bbe75e176b3b6c9884dbfd5bc59b519.jpg"} 
                short2 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"} 
                short3 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"}
            />

            <DiseñosMiniaturas 
                large  = {"https://i.pinimg.com/564x/1c/c0/07/1cc007fe5efccb28aa27777799912e60.jpg"} 
                short1 = {"https://i.pinimg.com/564x/0b/be/75/0bbe75e176b3b6c9884dbfd5bc59b519.jpg"} 
                short2 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"} 
                short3 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"}
            />

            <DiseñosMiniaturas 
                large  = {"https://i.pinimg.com/564x/1c/c0/07/1cc007fe5efccb28aa27777799912e60.jpg"} 
                short1 = {"https://i.pinimg.com/564x/0b/be/75/0bbe75e176b3b6c9884dbfd5bc59b519.jpg"} 
                short2 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"} 
                short3 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"}
            />

            <DiseñosMiniaturas 
                large  = {"https://i.pinimg.com/564x/1c/c0/07/1cc007fe5efccb28aa27777799912e60.jpg"} 
                short1 = {"https://i.pinimg.com/564x/0b/be/75/0bbe75e176b3b6c9884dbfd5bc59b519.jpg"} 
                short2 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"} 
                short3 = {"https://i.pinimg.com/564x/1e/eb/cf/1eebcfbbc7b116cc4077ac9e7db533c5.jpg"}
            />
            </div>
           
        </div>
   )
   
}
