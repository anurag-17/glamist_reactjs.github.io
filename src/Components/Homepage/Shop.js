import React from 'react'
import img1 from '../../images/img1.webp'
import img2 from '../../images/img2.webp'
import img3 from '../../images/img3.webp'
import img4 from '../../images/img4.webp'
import img5 from '../../images/img5.webp'
import img6 from '../../images/img6.webp'
import img7 from '../../images/img7.webp'
import img8 from '../../images/img8.webp'
import image1 from "../../images/img1.webp";
import image2 from "../../images/img2.webp";
import image3 from "../../images/img3.webp";
import { Arrival } from './Arrival'
import { Shopcard } from './Shopcard'

export const Shop = () => {
  return (
    <>
    <div>

<h1 className="shop-heading">Shop by Category</h1>


<div className="row ">
<Shopcard image = {img1} text ="Dresses"/>
<Shopcard image = {img2} text ="Gota Glaze"/>
<Shopcard image = {img3} text ="HandPainted"/>
<Shopcard image = {img4} text ="Kurta Sets"/>
</div>

<div className="row ">
<Shopcard image = {img5} text="Lehenga Sets"/>
<Shopcard image = {img6} text="Sarees"/>
<Shopcard image = {img7} text="Sahara Suit"/>
<Shopcard image = {img8} text="Suit Sets"/>
</div>




</div>
</>

  )
}
