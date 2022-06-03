import React,{useState} from 'react';
import './App.css';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
import Row from './Components/Row';
import Home from './Components/Home';
import Sell from './Components/Sell';
import {Routes,Route} from 'react-router-dom';

// import Input from './Components/Input';
// import TodoItem from './Components/TodoItem';


function App() {
  const [search,setSearch]=useState();
  const data = [
    {name:"Akash",desc:"Very good person"},
    {name:"Shuja" ,desc:"Very nice person"} 
  ]
  return (
    <>
    <Navbar search = {search} setSearch = {setSearch} />
    <Routes>
      <Route exact path = '/' element = {<Home />} />
      <Route exact path = "/sell" element = {<Sell />} />
    </Routes>
    {/* <Home /> */}
    {/* <Sell /> */}
    {/* <Container search = {search}/> */}
    {/* {data.map((card)=><Row name = {card.name} description = {card.desc} />)} */}
    </>
  );
}

export default App;
