import React from 'react'
import { Navbar } from "./Navbar";
import { Badge } from "./Badge";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Arrival } from './Arrival';
import { Footer } from './Footer';
import { Shopcard } from './Shopcard';
export const Main = () => {
  return (
    <>
    
    <Badge />
    <Navbar />
    <Home />
    <div className="shop-center">
<Shop/>
    </div>
    <div className="arrival-center">

    <Arrival/>
    </div>
<hr />
    <div className="Footer-center">
<Footer/>
    </div>
    </>
  )
}
