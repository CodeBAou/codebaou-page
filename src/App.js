import {useState} from 'react';
import './App.css';
import Header from './components/header/header';//componente Header [Siempre Visible]
import Inicio from './components/body/inicio/inicio';//componente page Inicio [ se carga ]



//COMPONENTE FUNCIONAL
function App() { //Los nombres de los componentes empiezan siempre por mayuscula

  let [cmp,setcmp] = useState('I');
  
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <Inicio />
      </div>
    </div>
  );
}

export default App;
