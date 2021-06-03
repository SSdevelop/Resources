//import logo from './logo.svg';
//import './App.css';
import {Route, Switch} from 'react-router-dom'
import Header from './components/header/Header.jsx'
import './components/header/Header.css'
import Home from './components/pages/home/Home.jsx';
import Footer from './components/footer/Footer'
function App() {
  return (
    <div classname='App'>
      <Header/>
    <Switch>
      <Route exact path= '/' component={Home} />
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
