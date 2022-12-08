import {useState} from 'react';
import './App.css';
import Header from './components/header/header';//componente Header [Siempre Visible]
import Menu from './components/menu/menu';//componente menu [Siempre Visible]
import Inicio from './components/body/inicio/inicio';//componente page Inicio [ se carga ]
import Diseños from './components/body/diseños/diseños';//componente page Diseños [ se carga]
import Notas from './components/body/notas/notas'; //componentes Notas [ se carga ]
import Proyectos from './components/body/proyectos/proyectos'; // componentes Proyecto [ se carga ]
import Contacto from './components/body/proyectos/proyectos'; // componente Contacto [ se carga ]

//COMPONENTE FUNCIONAL
function App() { //Los nombres de los componentes empiezan siempre por mayuscula
  
  const[cmp,setcmp] = useState('inicio');
  
  function SecpmMenu( name ){  
      switch(name){
        case 'inicio':
          return <Inicio/>;  
        break;
        case 'diseños':
          return <Diseños/>;
        break;
        case 'notas':
          return <Notas/>;
        break;
        case 'proyectos':
          return <Proyectos/>;
        break;
        case 'contacto':
          return <Contacto/>;
        break;
      } 
  }

  return (
    <div className="App">
      <Header/>
      <body className="App-body">
        <Menu/>
      </body>
    </div>
  );
}

export default App;
