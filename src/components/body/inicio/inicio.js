import React,{useState} from 'react';
import './inicio.css';
import ContactoForm from '../../form/contacto-form';
import ValidacionForm from '../../form/ValidacionForm';

export default function Inicio(props){
   
    const [animationInicio,setAnimationInicio]          = useState( "inicio-montar" );
    const [animationContacto,setAnimationContacto]      = useState( "inicio-montar" );
    const [animationNoContacto, setAnimationNoContacto] = useState( null );
    const [animationContactoH2, setAnimationContactoH2] = useState( null ); 
    const [displayContacto,setDisplayContacto]          = useState( false );
    const [styleForm, setStyleForm]                     = useState("diplayNone");
    let   [mostrar,setMostrar]                          = useState(null);

    // Animacion cuando se sale de la pagina de inicio
    const goodbye = (n) => {   
        setAnimationContacto( "resetPanelCOntacto" );
        setAnimationContactoH2( "ContraerH2contacto" );
        setAnimationInicio( "inicio-desmontar" );
        setTimeout( () => { props.changed(n);  }, 2000);
    }

    //Decide si el panel hay que abrirlo o cerrarlo y ejecuta la animacion que corresponda
    const DecideOCContacto = (e) => {

        if( displayContacto ){//se contrae panel contacto 
            setAnimationNoContacto("Aumenta-panel-nocontactato");
            setAnimationContacto("Contraer-Panel-contacto");
            setAnimationContactoH2("ExtenderH2contacto");
            setMostrar('formOcultar');
            setDisplayContacto( false );
            
        }else{//se extiende panel contacto
            setAnimationNoContacto( "Disminuye-panel-nocontacto" );
            setAnimationContacto( "Extender-Panel-contacto " );
            setAnimationContactoH2("ContraerH2contacto");
            setMostrar('formMostrar');
            setDisplayContacto( true );
        }
    }

    return(

        <div className="fondo-menu-inicio" >
            <>  
                {/* Tarea refactorizacion - convertir estos div en un componente*/}
                <div className    = { ` ${animationInicio}` }                        onClick = { (e) => goodbye(1) }         > <h2> Diseños     </h2> </div>
                <div className    = { ` ${animationInicio}` }                        onClick = { (e) => goodbye(2) }         > <h2> Notas     </h2> </div>
                <div className    = { ` ${animationInicio} ${animationNoContacto}` } onClick = { (e) => goodbye(3) }         > <h2> Proyectos </h2> </div>
                <div className    = { ` ${animationInicio} ${animationContacto} `  } onClick = { (e) => {  

                    if (e.target.nodeName !== 'DIV' && e.target.nodeName !== 'H2')
                        return;// evitar que el evento se propague al formulario
                        DecideOCContacto(); 
                } } > 

                    <h2 className = { ` ${animationContactoH2} ` } > Contacto  </h2> 
                    <ValidacionForm render = { obj => {
                        return <ContactoForm  styleForm={styleForm} mostrar={mostrar} validLib={ obj }/> 
                    }} />
                </div>
            </>    
        </div>
            
    )
}