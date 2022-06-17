import React, { useState } from 'react'
import axios from 'axios'


export const Admin = () => {

    const[productvalue,setproductvalue] = useState({
        name:"",
        category:"",
        description:"",
        price:"",
        image:"",
        homeimage:"",
        details:"",
        instock:""
    })
    const handlechange = (event)=>{
const{name,value} = event.target

setproductvalue({...productvalue,[name]:value})
}


const formSubmit = async(event)=>{

event.preventDefault()
await fetch("http://localhost:8000/addproduct",{
    method:"POST",
    body:JSON.stringify(productvalue),
    headers:{
        'content-type':"Application/json"
    }
}).then((response)=>{
console.log(response)
}).catch((error)=>{
    console.log(error)
})

event.target.reset()
}
    
  return (

    
    <>
<form method = "post" className=' w-75 m-auto' onSubmit={formSubmit}>
  <div className="form-group">
    <label htmlFor="productname">product name</label>
    <input required name ="name" onChange={handlechange} type="text" className="form-control"  placeholder="Product name"/>

  </div>
  <div className ="form-group">
    <label htmlFor="exampleFormControlSelect1">Product category</label>
    <select name='category' onChange={handlechange} className="form-control" id="exampleFormControlSelect1">
        <option >choose catagory</option>
      <option value="jeans">jeans</option>
      <option value="shirt">shirt</option>
      <option value="shoes">shoes</option>
      <option value="kurta">kurta</option>
      <option value="Headphones">Headphone</option>
      <option value="alexa">alexa</option>
      <option value="watch">watch</option>
      <option value="sunglasses">sunglasses</option>
      <option value="bags">bags</option>
     
    </select>
  </div>
 
  <div className="form-group">
    <label htmlFor="productdescription">Product description</label>
    <input required name='description' onChange={handlechange} type="text" className="form-control"  placeholder="product description"/>
  </div>
  <div className="form-group">
    <label htmlFor="price">price</label>
    <input required name = "price" onChange={handlechange} type="Number" className="form-control"  placeholder="price"/>
  </div>
  <div className="form-group">
    <label htmlFor="price">Home image</label>
    <input required name = "homeimage" onChange={handlechange} type="url" className="form-control"  placeholder="Home image"/>
  </div>
  <div className="form-group">
    <label htmlFor="image">image url</label>
    <input required name = "image" onChange={handlechange} type="url" className="form-control"  placeholder="image_url"/>
  </div>
  <div className="form-group">
    <label htmlFor="productdetails">Category</label>
    <textarea required name = "details" onChange={handlechange} type="details" className="form-control"  placeholder="details"/>
  </div>
  <div className="form-group">
    <label htmlFor="instock">Stock</label>
    <input required name = "instock" onChange={handlechange} type="number" className="form-control"  placeholder="instock"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  )
}
