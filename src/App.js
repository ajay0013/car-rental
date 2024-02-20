import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>

      <Footer/>
    </div>
  );
}

export default App;
