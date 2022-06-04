import React, { useState } from 'react';
// import './App.css';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
import Row from './Components/Row';
import Home from './Components/Home';
import Sell from './Components/Sell';
import { Routes, Route } from 'react-router-dom';
import Gadgets from './Components/Gadgets';
// import Input from './Components/Input';
// import TodoItem from './Components/TodoItem';
import './style.css';
import Textbook from './Components/Textbook';
import Vehicle from './Components/Vehicle';

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <div className='home-container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path = "/vehicle" element = {<Vehicle />} />
          <Route exact path = "/textbook" element = {<Textbook />} />
          <Route exact path="/sell" element={<Sell />} />
          <Route exact path="/gadgets" element={<Gadgets />} />
        </Routes>
        {/* <Home /> */}
        {/* <Sell /> */}
        {/* <Container search = {search}/> */}
        {/* {data.map((card)=><Row name = {card.name} description = {card.desc} />)} */}
      </div>
    </>
  );
}

export default App;
