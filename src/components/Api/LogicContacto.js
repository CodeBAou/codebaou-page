
const LogicContacto = () => {
    
    const Send = () => {
        alert('Mensaje Enviado');
    }

    return (
        props.render(Send())
    )
}