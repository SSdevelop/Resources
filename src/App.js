//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as router} from 'react-router-dom'
import Header from './components/header/Header.jsx'
import './components/header/Header.css'
function App() {
  return (
    <div classname='App'>
    <router>
    <Header />
    </router>
    </div>
  );
}

export default App;
