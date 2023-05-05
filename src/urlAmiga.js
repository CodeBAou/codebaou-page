
/**
 *  URL AMIGA , fichero de configuracion para el manejo de las url en tu aplicacion frontend
 */

/** ********************  APARTADO DE CONFIGURACION */
//Aqui escrbe todo lo que sea modificable al cambiar de alojamiento, 
//las url no deben ser las de consumo sino partes de url que sean comunes en las url consumibles por la api

//URL 
export const cu_host = `https://codebaou-page-backend.vercel.app`;          // url SERVER
const cu_private     = "/private";//Esta ruta se aprovecha en 2 url de consumo
const cu_api         = "/api";//Esta ruta se aprovecha en 3 url de consumo

const vol_paginate = 10 ; //Numero de elementos por pagina [cu_part_pagination]

/** Headers  */
export const headers = {    //JSON
    headers:{
        'content-type': 'application/json',
        'Access-Control-Allow-Origin':`*`
    }   
}

/** *****************  APARTADO PARA CONSUMIR */
//Aqui construye las url necesarias de tu aplicacion utilizando las variables del apartado anterior

export const cu_auth      = `${cu_host}/auth`; //Ruta para Login auth0
export const cu_post      = `${cu_host}${cu_private}/post`; //Ruta para manejo de post
export const cu_section   = `${cu_host}${cu_private}/section`; //Ruta para manejo de secciones de un post
export const cu_proyectos = `${cu_host}${cu_api}/proyectos`; //Ruta para manejo de proyectos
export const cu_notas     = `${cu_host}${cu_api}/notas`; //Ruta para manejo de notas
export const cu_diseños   = `${cu_host}${cu_api}/disenos`; //Ruta para manejo de diseños

export const cu_sendEmail = `${cu_host}${cu_api}/contacto`;
export const cu_sendEmailCV = `${cu_sendEmail}/cv`

/** **********************  APARTADO PARTS */
//Aqui escribe partes de una URL que sean compatibles con las url de consumo anteriores

//Devuelve una parte de la url para peticiones con id se implementa en el codigo como funcion para obtener el id necesario.
export const cu_part_id = (id) => {
    return `/${id}`;
}

//Devuelve una parte de la url para envio de paramatros de paginacion
//Configure en estos parametros la paginacion de forma general o pasando parametros 
export const cu_part_pagination = ( desde = 0, limite = vol_paginate ) =>{
    return `?desde=${desde}&limite=${limite}`;
}



//Ejemplos de uso 

//import { cu_diseños} from '../config.js'; //importacion de este fichero

//Necesitamos la  ruta http://localhost:3000/diseños

// ruta -> ``${cu_diseños}  = http://localhost:300/diseños


//Necesitamos la ruta http://localhsot:3000/diseño/123hf44dsk44dksfjsdfkds22ksdfsd  (por id)

// ruta ->  `${cu_diseños}$(cu_part_id(123hf44dsk44dksfjsdfkds22ksdfsd))`


//Necesitamos la ruta http://localhsot:3000/notas?desde=0&hasta=30  (paginado)

// ruta -> `${cu_notas}$(cu_part_pagination(1))`  // primera pagina , total de elmentos = vol_paginate [predeterminado]
// ruta -> `${cu_notas}$(cu_part_pagination(2,30))` //  desde = 2   hasta = 30   pagination 