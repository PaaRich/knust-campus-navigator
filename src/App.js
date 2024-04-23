import './App.css';
import React from 'react'
import NavbarSide from './Components/Navbar/NavbarSide';
import Footer from './Components/Footer/Footer';
import MapTileLayer from './Components/Map/MapTileLayer';
import About from './Components/About/About';
import TopNavbar from './Components/TopNavbar';
import ToTop from './Components/ToTop';

// export const UserContext=createContext();

function App() {

  // const [display,setDisplay]=useState(false)

  return (
    
      <div className="App">
        <TopNavbar/>
        <div className='home-page'>
          <NavbarSide/>
          <MapTileLayer/>
        </div>
          <About/>
          <Footer/>
          <ToTop/>
      </div>
    
  );
}

export default App;
