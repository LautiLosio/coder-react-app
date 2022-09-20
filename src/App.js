import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo'
import BoxForChildren from './components/BoxForChildren';
import NavBar from './components/NavBar';
import Clicker from './components/Clicker';

function App() {
  return (
    <div className="main">
      <NavBar/>
      <h1>Hello World</h1>
      <BoxForChildren>
        <p>parrafo con texto</p>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </BoxForChildren>
      <ul>
        <li className='green'>elemento 1</li>
        <li>elemento 2</li>
        <li>elemento 3</li>
      </ul>
      <span>Otra cosa</span>
      <strong>En negritas</strong>
      <Saludo></Saludo>
      <Saludo name='Miguel' age={23} />
      <Saludo name='Carlos' age={18} />

      <Clicker>Haz asdf aqui</Clicker>
    </div>
  );
}

export default App;
