import React from 'react'

export const CategoryCard = (props) => {
  return (
  <>
  <div style={{display:"flex",justifyContent:"center"}} >

 <div className=" row">
      <div className="col-sm-2">
        <div className="shop-images p-0">
          <img
          className="ml-3"
            style={{ height: "295px",marginTop:"30px",justifyContent:"center"}}
            src={props.cimage}
          ></img>
       <div className="price">
        <p>{props.price}</p>
       </div>
        </div>
      </div>
  
    </div>
  </div>
  </>
  )
}
