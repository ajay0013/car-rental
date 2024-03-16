import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Vehicles from './Pages/Vehicles/Vehicles';
import Team from './Pages/Team/Team';
import Contact from './Pages/Contact/Contact';
import NoPage from './Pages/NoPage/NoPage';

import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">

      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/vehicles" element={<Vehicles/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>

      <Footer/>
      
    </div>
  );
}

export default App;
