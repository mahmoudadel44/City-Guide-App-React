import React from 'react'
import logo from '../../logo.svg'
import {Link} from 'react-router-dom'
 const Navbar=()=> {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
   <Link className="navbar-brand ml-5" to="/">
    <img src={logo} style={{width:'40px',height:'40px'}}/>
    </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span className="navbar-toggler-icon"></span> */}
    <span>
               <i className="fas fa-bars" style={{color:'#FFF'}}></i>
 </span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-center text-uppercase ml-5" to="/">
          Home&nbsp;<i className="fas fa-home"></i><span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-center text-uppercase ml-5" to="/News">news
        &nbsp;<i className="fa fa-newspaper"></i></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-center text-uppercase ml-5" to="/Contacts">
        contact us&nbsp;<i className="fas fa-file-contract"></i></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-center text-uppercase ml-5" to="/OurPrices">OurPrices
        &nbsp;<i className="fa fa-pound-sign"></i></Link>
      </li>
    </ul>
 
  </div>
</nav>
    )
}

export default Navbar;

