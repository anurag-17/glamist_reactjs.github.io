import React from 'react'
import { Footer } from '../Homepage/Footer'
import { Navbar } from '../Homepage/Navbar'
import { CategoryCard } from './CategoryCard'
import { Mainhome } from './Mainhome'
import cimg1 from "./proimages/cimg1.webp"
import cimg2 from "./proimages/cimg2.webp"
import cimg3 from "./proimages/cimg3.webp"
import cimg4 from "./proimages/cimg4.webp"
import cimg5 from "./proimages/cimg5.webp"
import cimg6 from "./proimages/cimg6.webp"
import cimg7 from "./proimages/cimg7.webp"
import cimg8 from "./proimages/cimg8.webp"
import Banner from "./proimages/Banner2.jpg"


export const Category = () => {
  return (
   <>

   <Navbar/>
   <div className="banner">
    <img className='bannerimg' src={Banner} alt="" />
   </div>

<div className="row category-container m-0 p-0">

<CategoryCard cimage = {cimg1} price = "2000$"/>
<CategoryCard cimage = {cimg2} price = "3400$"/>
<CategoryCard cimage = {cimg3} price = "2504$"/>
<CategoryCard cimage = {cimg4} price = "2000$"/>
</div>

<div className="row category-container m-0 p-0">
<CategoryCard cimage = {cimg5} price = "2999$"/>
<CategoryCard cimage = {cimg6} price = "3999$"/>
<CategoryCard cimage = {cimg7} price = "2333$"/>
<CategoryCard cimage = {cimg8} price = "2999$"/>

</div>
<hr />
<Footer/>
   </>
  )
}
