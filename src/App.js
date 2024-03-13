import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Vehicles from './Pages/Vehicles/Vehicles';

import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Vehicles/>

      <Footer/>
      
    </div>
  );
}

export default App;
