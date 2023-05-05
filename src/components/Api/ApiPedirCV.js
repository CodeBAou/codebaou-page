import {cu_sendEmail} from '../../urlAmiga';

export default function ApiPedirCV(props){

    const date = new Date().toUTCString();

    const obj = {

        send: async ( data ) => {
            console.log(data);
            await fetch(cu_sendEmail, {
                method: "POST",
                body: JSON.stringify({
                    emisor:data.email,
                    mensaje: `
                    Alguien ha pedido el CV desde el portafolio.
                          Empresa: ${data.empresa} 
                          LinkedIn: ${data.linkedIn} 
                          Email: ${data.email}
                    
                    ${date}
                `
                }),
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