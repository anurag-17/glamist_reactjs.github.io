import React from 'react'
import { Navbar } from '../Homepage/Navbar'
import { Mainhome } from "./Mainhome"
import { MainProduct } from './MainProduct'
export const MainShop = () => {
  return (
    <div>
      <Navbar/>
 <Mainhome/>
 <div style = {{width:"100%",margin:"auto"}} className="mainproduct">
 <MainProduct/>

 </div>
    </div>
  )
}
