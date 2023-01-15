import logo from './logo.svg';
import './App.css';
import {Header, Hero, Menu, Map, Footer, About, Form} from './components'
import "./fonts/Heavitas.ttf";
import "./fonts/AvenirNextLTPro-Regular.otf";

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Menu/>
        <About/>
        <Map/>
        <Form/>
        <Footer />
    </div>
  );
}

export default App;
