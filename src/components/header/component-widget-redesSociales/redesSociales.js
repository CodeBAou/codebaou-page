import './redesSociales.css';
import github from './icons/github.svg';

export default function RedesSociales(){

    let url_github="https://github.com/CodeBAou";
    return(
        <a href={url_github} className="RedesSociales-widget" target="_blanc">
            <img src={github} alt="icono github" ></img>
        </a>
    );
}