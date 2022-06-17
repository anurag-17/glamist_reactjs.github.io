import React,{useState,useEffect} from "react";
import image1 from '../../images/image1.webp'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import axios from 'axios'
import { MainShop } from "../mainshopcom/MainShop";
export const Home = () => {
  const[prodata,setprodata] = useState([])


  const showproduct = async()=>{

   
    const res = await axios.get("http://localhost:8000/showproduct")
    const finaldata = await res.data
    setprodata(finaldata)
    console.log(finaldata)

  }

  useEffect(()=>{
    showproduct()
    
  },[])


  return (
    <>
      <div className="home-container">
        <div className="row m-auto">
          <div className=" f-col col-md-5">
            <h1>
              <span className="heading">SUMMER</span>{" "}
              <span className="sale">Sale</span>
            </h1>
            <div className="discount">
              <h1 className="offper">
                {" "}
                <span className="dis-text">upto</span> 60%{" "}
                <span className="dis-text">OFF</span>
              </h1>
            </div>

              <Link to="/category">
            <button className="btn home-btn">
            SHOP NOW
            </button>

              </Link>
          </div>

{/* {
  prodata.map((items,index)=>{
    return
  })
} */}
          <div className="col-md-5">
            <div className="image">
              <img className="home-img" src={image1} alt="banner image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
