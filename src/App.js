import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <About/>

      <Footer/>
    </div>
  );
}

export default App;
