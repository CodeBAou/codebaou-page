import React from 'react';
import './header.css';
import ImagenPerfil from '../../assets/Boris.jpg';
import Tecnologias from './component-widget-tecnologias/tecnologias';
import Contacto from './component-widget-contacto/contacto';
import RedesSociales from './component-widget-redesSociales/redesSociales';
import ValidacionForm from '../form/ValidacionForm';


export default class Header extends React.Component{
    
   constructor(props){

    super(props);
    this.state = {
        menuOpen:true,
        stylemenu:'open',
        loginActived:false
    };
   }

   componentDidUpdate(){
        if(this.state.login){

        }
   }

   login(){

   }

   openCloseMenu(e) {

      e.preventDefault();
      e.stopPropagation();
      
      const header = document.getElementsByClassName("div-content")[0];
      console.log( header.clientWidth );

      if(this.state.menuOpen){
        //cerrar
        this.setState({menuOpen:false});
        this.setState({stylemenu:'close'});
      }else{
        //abrir
        this.setState({menuOpen:true});
        this.setState({stylemenu:'open'});
      }
   };


   

    render(){

        //Obtener Imagen del servidor- http - FALTA
        //Proteger imagen de descargas - FALTA
        //pedir texto presentacion

        const imagen =  <img className="perfil-imagen" src={ImagenPerfil} alt="Boris Alvarez" longdesc="Foto de Boris" border="0px" />;;
        
        return (

            <header className={`div-content ${this.state.stylemenu}`} >
                
                <div className={`content-icon`}>
                    <span className="material-symbols-outlined" onClick={(e) => this.openCloseMenu(e) }> menu </span>
                </div>

                {imagen}

                <h1>CodeBAou</h1>
                <h2>Boris Alvarez</h2>
                
                <p className="presentacion">
                    {/* PETICION DESDE EL SERVIDOR */}
                    Mi pasion son las <b>tecnologias javaScript</b> y mi ruta de aprendizaje 
                    va hacia ellas con Nodejs para el backend, HTML5, CSS, js y Reactjs  
                    para el FrontEnd y Electron.js para el escritorio.
                </p>

                <p className="presentacion">
                    {/* PETICION DESDE EL SERVIDO */}
                    Si me tuviera que definir diria
                    que soy un <b>desarrollador de javascript.</b>
                </p>
                <p className="presentacion"><b>¯\_(ツ)_/¯</b></p>

                {/*Componente Enlaces Tecnologias que manejo*/}
                <div className="content-widget">
                    <Tecnologias/>
                </div>
                
                {/* Componente para los datos de contacto */}
                <div className="content-widget">
                    <ValidacionForm render= { validHTML => {
                        return <Contacto validForm = { validHTML }/>
                    }}/>
                    
                </div>
                {/* Componente para las redes sociales */}
                <div className="content-widget">
                    <RedesSociales/>
                </div>   
            </header>
        ); 
    }
}

