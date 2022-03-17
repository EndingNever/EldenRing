import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Header from './Components/Header-photo/Header';
import Eldenring from './Components/Eldenring/Eldenring';
import Overlay from './Components/StickyOverlay/Overlay';


function App() {
  return (
    <div className="App">
      <div className="navbar-component">
        <Navbar />
      </div>
      <div className="overlay-component">
        <Overlay />
      </div>
      <div className="header-component">
        <Header />
      </div>
      <div className="elden-component">
        <Eldenring />
      </div>
    </div>
  );
}

export default App;
