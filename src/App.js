import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Header from './Components/Header-photo/Header';
import Eldenring from './Components/Eldenring/Eldenring';
import Overlay from './Components/StickyOverlay/Overlay';
import KeyFeatures from './Components/KeyFeatures/KeyFeatures';
import Characters from './Components/Characters/Characters';
import Shopnow from './Components/ShopNow/Shopnow';

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
      <div className="keyFeatures-component">
        <KeyFeatures />
      </div>
      <div className="characters-component">
        <Characters />
      </div>
      <div className="shopnow-component">
        <Shopnow />
      </div>
    </div>
  );
}

export default App;
