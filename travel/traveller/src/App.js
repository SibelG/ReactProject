import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/rout/Rout';

function App() {
  return (
   <>
   <BrowserRouter>
   <Nav/>
   <Header/>
   <Rout/>
   </BrowserRouter>
  
   </>
  );
}

export default App;
