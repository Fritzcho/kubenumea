import logo from './logo.svg';
import './App.css';
import {Header, Hero, Menu, Map, Footer} from './components'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Menu />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
