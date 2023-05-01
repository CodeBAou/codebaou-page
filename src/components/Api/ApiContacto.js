import {cu_sendEmail} from '../../urlAmiga';

const ApiContacto = (props) => {
    
    const obj = {
       send: async ( data ) => {

        /* SOLICITUD FETCH 
        // response -> mensaje que envia el servidor
        // request -> mensaje que se envia al servidor
        */
        await fetch(cu_sendEmail, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(response => 
                response.json()
           ) //Se convierte datos recibidos a json
          .then( data => {
                return data;
          })
          .catch(err => console.log(err));
       }
    }

    return (
        props.render(obj)
    )
}

export default ApiContacto;