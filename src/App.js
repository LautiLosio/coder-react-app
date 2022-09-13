import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo'

function App() {
  return (
    <div className="main">
      <h1>Hello World</h1>
      <ul>
        <li>elemento 1</li>
        <li>elemento 2</li>
        <li>elemento 3</li>
      </ul>
      <span>Otra cosa</span>
      <strong>En negritas</strong>
      <Saludo></Saludo>
    </div>
  );
}

export default App;
