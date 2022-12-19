import './video.css';
import video from './video-Fondo.mp4';

export default function Video(){

    return(
        <video muted playinline="true" loop autoPlay="autoplay">
            <source src={video} type="video/mp4" ></source>
        </video>
    )
}