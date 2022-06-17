import React from "react";
import { Footer } from "../Homepage/Footer";
import { Collection } from "./Collection";
import { Productcard } from "./Productcard";
import proimg1 from "./proimages/proimg1.webp";
import proimg2 from "./proimages/proimg2.webp";
import proimg3 from "./proimages/proimg3.webp";
import proimg4 from "./proimages/proimg4.webp";
import proimg5 from "./proimages/proimg5.webp";
import proimg6 from "./proimages/proimg6.webp";

export const MainProduct = () => {
  return (
    <>
      <div style={{ textAlign: "center" }} className="product-title">
        <h1>Products</h1>
      </div>

      <div className="">
        <div className="row product-row ">
         <Collection/>

          <Productcard proimg={proimg1} protext="Dresses" />
          <Productcard proimg={proimg2} protext="Gota Glaze" />
          <div >

          <Productcard  proimg={proimg3} protext="HandPainted" />
          </div>
        </div>

        <div className="row-lg-12 product-row ml-1">
          <div style={{ visibility: "hidden" }}>
            <Productcard />
          </div>
          <Productcard proimg={proimg4} protext="Kurta Sets" />
          <Productcard proimg={proimg5} protext="Lehenga Sets" />
          <Productcard proimg={proimg6} protext="Sarees" />
          {/* <Productcard image = {proimg7} text="Sahara Suit"/>
<Productcard image = {proimg8} text="Suit Sets"/> */}
        </div>
      </div>
      <hr />
      <Footer/>
    </>
  );
};
