import axios from "axios";
import React,{useState} from "react";

export const Shopcard = (props) => {
  const [shopimage,setShopimage] = useState([])

const showimage = ()=>{
  let res = axios.get('http://localhost:8000/shoproduct')
  let finaldata = res.data
  setShopimage(finaldata)
}



  return (
    <div className=" shop-row row">



      
      <div className="col-sm-2">
        <div className="shop-images p-0">
          <img
          className="ml-3"
            style={{ height: "295px",marginTop:"30px",justifyContent:"center"}}
            src={props.image}
          ></img>
          <div className="pro-btn">{props.text}</div>
        </div>
      </div>
  
    </div>
  );
};
