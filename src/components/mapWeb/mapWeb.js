import './mapWeb.css';

export default function Mapweb(props){

    const map = props.map;//Array nombres de componentes
    const cargaMenu = props.cargamenu;
    let n = 0;

    const navLista = map.map( (name) =>
        <li key={n++} onClick = { (e) => cargaMenu(name) } > { `${name} > `} </li> 
    );

    return (
        <menu className="map">
            {navLista}
        </menu>
    )
}