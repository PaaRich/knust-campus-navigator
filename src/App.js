import "./App.css";
import React, { createContext, useState } from "react";
import NavbarSide from "./Components/Navbar/NavbarSide";
import Footer from "./Components/Footer/Footer";
import MapTileLayer from "./Components/Map/MapTileLayer";
import About from "./Components/About/About";
import TopNavbar from "./Components/TopNavbar";
import ToTop from "./Components/ToTop";

export const myNavBar = createContext();

function App() {
  // const [display,setDisplay]=useState(false)
  const [open, setOpen] = useState(false);

  return (
    <myNavBar.Provider value={{ open, setOpen }}>
      <div className="App">
        <TopNavbar />
        <div className="home-page">
          <NavbarSide />
          <MapTileLayer />
        </div>
        <About />
        <Footer />
        <ToTop />
      </div>
    </myNavBar.Provider>
  );
}

export default App;
