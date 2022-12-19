import {useState} from 'react';
import './App.css';
import Header from './components/header/header';//componente Header [Siempre Visible]
import Inicio from './components/body/inicio/inicio';//componente page Inicio [ se carga ]
import Diseños from './components/body/diseños/diseños';//componente page Diseños [ se carga]
import Notas from './components/body/notas/notas'; //componentes Notas [ se carga ]
import Proyectos from './components/body/proyectos/proyectos'; // componentes Proyecto [ se carga ]
import Contactos from './components/body/contacto/contacto';
import Video from './components/video/video';

function Deploy(props){

  const [ select, setSelect] = useState(0);
  
  const selection = (n) => {
    setSelect(n);
  }

  if( select == 1) { return < Diseños   changed={selection} />;  }
  if( select == 2) { return < Notas     changed={selection} /> ; }
  if( select == 3) { return < Proyectos changed={selection} />;  }
  { /* if( select == 4) { return < Contactos changed={selection} />;  } */}

  return <Inicio changed={selection}/>;
}


//COMPONENTE FUNCIONAL
function App() { 

  return (
  
    <div className="App">
      <Header/>
      <div className="App-body"> 
          <Deploy /> 
      </div>
       <Video/>
       <div className="filtro-video"></div>
     </div>
       
  
   
  );
}

export default App;

