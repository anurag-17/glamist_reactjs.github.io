import React from 'react'

export const Productcard = (props) => {
  return (
  <>
  
  <div style={{display:"flex",justifyContent:"center",left:"30%",right:"50%"}}>
      <div className="col-sm-2">
        <div className="shop-images p-0">
          <img
          className=""
            style={{ height: "295px",marginTop:"30px"}}
            src={props.proimg}
          ></img>
          <div className="pro-btn">{props.protext}</div>
        </div>
      </div>
  
    </div>


  </>
  )
}
