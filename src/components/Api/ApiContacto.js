
const ApiContacto = (props) => {
    
    const obj = {
       send: ( data ) => {
            //Enviar contacto
            alert("send apiContacto");
       }
    }

    return (
        props.render(obj)
    )
}

export default ApiContacto;