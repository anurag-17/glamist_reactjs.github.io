import React from 'react'
import image1 from "../../images/img1.webp"
import image2 from "../../images/img2.webp"
import image3 from "../../images/img3.webp"
import "../../App.css"
export const Arrival = (props) => {
  return (
  <>
  
    
  <div   style= {{height:"100vh",display:"flex",flexWrap:"wrap"}}className="row arrive-row">
    <div className="col-sm-3">

  <div style = {{width:"380px",height:"320px" ,position:"relative",top:50,backgroundColor:"#e0f7ff"}} className="arrive-card mr-4 ">
    <div className="card-body">
    <h1>
        New Arrival    
        </h1>
        <p style={{fontSize:"15px"}} className='text-muted mr-5'>Lorem ipsum dolor sit amet,<br />
       consectetur adipiscing elit. Ut elit tellus, 
        luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

    </div>
  </div>
  
    </div>
    <div className="col-md-2 ml-4">
  <img className='arriveimages' style = {{width:200,height:250,marginTop:85,position:"relative",left:"50%"}} src={image1} alt="" />
    </div>
    <div className="col-md-2 ml-4">
  <img className='arriveimages' style = {{width:200,height:250,marginTop:85,position:"relative",left:"50%"}}  src={image2} alt="" />
    </div>
    <div className="col-md-2 ml-4">
  <img className='arriveimages' style = {{width:200,height:250,marginTop:85,position:"relative",left:"50%"}}  src={image3} alt="" />
    </div>

  </div>
  
  </>
  )
}
