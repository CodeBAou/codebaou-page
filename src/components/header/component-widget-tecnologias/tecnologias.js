import './tecnologias.css';
import html from './icons/html5.svg';
import css from './icons/css3.svg';
import js from './icons/js.svg';
import react from './icons/react.svg';
import node from './icons/node.png';
import electron from './icons/electronjs.svg';
import php from './icons/php.svg';
import mariadb from './icons/mariadb.svg';
import mysql from './icons/mysql.svg';
import mongo from './icons/mongo.svg';

export default function Tecnologias(){

    const url_html     = "https://developer.mozilla.org/es/docs/Web/HTML";
    const url_css      = "https://developer.mozilla.org/en-US/docs/Web/CSS";
    const url_js       = "https://developer.mozilla.org/es/docs/Learn/JavaScript";
    const url_node     = "https://nodejs.org/es/docs/";
    const url_electron = "https://www.electronjs.org/es/docs/latest";
    const url_react    = "https://es.reactjs.org/docs/getting-started.html";
    const url_mariadb  = "https://mariadb.com/kb/en/documentation/";
    const url_mysql    = "https://dev.mysql.com/doc/";
    const url_mongo    = "https://www.mongodb.com/docs/";
    const url_php      = "https://www.php.net/docs.php";

    return (
    
        <div className="content-Widget">

            {/* HTML */}
            <a href={url_html} target="_blank">
                <img src={html} alt="insertar SVG con la etiqueta image"></img>
            </a>

            {/* CSS */}
            <a href={url_css} target="_blank">
                <img
                    src={css}
                    alt="icono CSS"
                    longdesc="Enlace documentacion css de la pagina fundacion mozilla" 
                ></img>
            </a>

            {/* JAVASCRIPT */}
            <a href={url_js} target="_blank">
                <img
                    src={js}
                    alt="icono javascript"
                    longdesc="Enlace a la documentacion javascript de la pagina fundacion mozilla"
                ></img>
            </a>

            {/* REACTJS */}
            <a href={url_react} target="_blank">
                <img 
                    src={react}
                    alt="icono react"
                    longdesc="Enlace a la documentacion oficial reactjs"
                ></img>
            </a>
            {/* NODEJS */}
            <a href={url_node} target="_blank">
                <img
                    src={node}
                    alt="icono nodejs"
                    longdesc="Enlace documentacion oficial de nodejs"
                ></img>
            </a>
            {/* ELECTRONJS */}
            <a href={url_electron} target="_blank">            
                <img
                    src={electron}
                    alt="icono electronjs"
                    longdesc="Enlace a la documentacion oficial de electronjs"
                ></img>
            </a>
            {/* MARIADB */}
            <a href={url_mariadb} target="_blank">            
                <img
                    src={mariadb}
                    alt="icono mariadb"
                    longdesc="Enlace a la documentacion oficial de mariadb"
                ></img>
            </a>
            {/* MYSQL*/}
            <a href={url_mysql} target="_blank">            
                <img
                    src={mysql}
                    alt="icono mysql"
                    longdesc="Enlace a la documentacion oficial de mysql"
                ></img>
            </a>
            {/* MONGO */}
            <a href={url_mongo} target="_blank">            
                <img
                    src={mongo}
                    alt="icono mongo"
                    longdesc="Enlace a la documentacion oficial de mongo"
                ></img>
            </a>
            {/* PHP */}
            <a href={url_php} target="_blank">            
                <img
                    src={php}
                    alt="icono php"
                    longdesc="Enlace a la documentacion oficial de php"
                ></img>
            </a>
        </div>
    );
};