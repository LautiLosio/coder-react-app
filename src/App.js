import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SwapiContainer from './components/SwapiContainer';
// import logo from './logo.svg';
// import Saludo from './components/Saludo'
// import BoxForChildren from './components/BoxForChildren';
import NavBar from './components/NavBar';
import Clicker from './components/Clicker';
import InputControl from './components/InputControl';
import FirebaseComp from './firebase/FirebaseComp';
// import ItemList from './components/ItemList';
// import SwapiContainer from './components/SwapiContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path={'/'} element={<Clicker>Hazme click</Clicker>} />
        <Route path={'/swapi'} element={<SwapiContainer/>}/>
        <Route path={'/input'} element={ <InputControl /> } />
        <Route path={'/firebase'} element={<FirebaseComp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;