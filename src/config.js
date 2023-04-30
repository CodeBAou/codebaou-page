
/**
 * URL API
 */

const cu_host    = "http://localhost:3001";          // url SERVER
const cu_private = "/private";
const cu_api     = "/api";

export const cu_auth      = `${cu_host}/auth`;
export const cu_post      = `${cu_host}${cu_private}/post`; 
export const cu_section   = `${cu_host}${cu_private}/section`;
export const cu_proyectos = `${cu_host}${cu_api}/proyectos`;
export const cu_notas     = `${cu_host}${cu_api}/notas`;
export const cu_diseños   = `${cu_host}${cu_api}/disenos`;

//Devuelve una parte de la url para peticiones con id 
export const cu_part_id = (id) => {
    return `/${id}`
}

//Devuelve una parte de la url para envio de paramatros de paginacion
export const cu_part_pagination = (desde=0,limite = 10) =>{
    return `/?${desde}=0&${limite}=3`;
}