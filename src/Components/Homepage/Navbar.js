import React from 'react'
import logo from "../../images/Logo.png"
import image1 from '../../images/image1.webp'
import "../../App.css"
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
   <>

 <nav className="nav-main navbar navbar-expand-lg navbar-light p-0 ">

    <div className="container-fluid">

        <Link to="/" className=" nav-logo p-0 "> <img src={logo} alt="logosvg" style={{height:100,width:190}} /></Link>
        <button className="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div  className="navbar-nav m-auto">
                <Link to = "/mainshop" className="nav-font nav-item nav-link text-dark">SALE</Link>
                <Link to = "/mainshop" className="nav-font nav-item nav-link  text-dark ">JUST IN </Link>
                <Link to = "/category" className="nav-font nav-item nav-link text-dark ">Ethnic wear </Link>
                <Link to = "/mainshop" className="nav-font nav-item nav-link text-dark">Western Wear</Link>
                <Link to = "/category" className="nav-font nav-item nav-link text-dark ">Sarees </Link>
                <Link to = "/category" className="nav-font nav-item nav-link text-dark">Lehenga Sets</Link>
                <Link to = "/category" className="nav-font nav-item nav-link text-dark">Jewellery</Link>
                <Link to = "/category" className="nav-font nav-item nav-link text-dark">Bags</Link>
                <Link to = "/mainshop" className="nav-font nav-item nav-link text-dark">Home Decor</Link>
            
            </div>
        
        </div>
    </div>
</nav>
   </>
  )
}
