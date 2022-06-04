import React,{useState} from 'react';
import {Link} from 'react-router-dom';
const Navbar = ({search,setSearch}) => {
    
  return (
    <>
    <nav className="navbar navbar-expand-lg  navbar-light bg-light">
  <a className="navbar-brand" href="#">OLX</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sell">Sell Item</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Catagories
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="/vehicle">Vehicles</Link>
          <Link class="dropdown-item" to="/gadgets">Gadgets</Link>
          <Link class="dropdown-item" to="/textbook">Notes</Link>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input value = {search} onChange ={(e)=>setSearch(e.target.value)} className="form-control mr-sm-2"  type="search" placeholder="Search" aria-label="Search" />
      <button disabled = {search.length===0?true:false} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Navbar