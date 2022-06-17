import React from 'react'

export const Collection = () => {
  return (
    <div style={{width:"50px",position:"relative",right:"5%"}} className="col-sm-2">
            <h4>
              Collections
              <hr />
            </h4>
            <div className="dropdown">
              <div className="droptitle">
                <ul
                  className="dropcat dropdown-toggle"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Category
                </ul>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li className="dropitems">
                    {" "}
                    <input value="bag" type="radio" name="bag" id="" /> bags
                  </li>
                  <li className="dropitems">
                    {" "}
                    <input
                      value="bestseller"
                      type="radio"
                      name="bag"
                      id=""
                    />{" "}
                    bestseller
                  </li>
                  <li className="dropitems">
                    {" "}
                    <input value="dresses" type="radio" name="bag" id="" />{" "}
                    dresses
                  </li>
                  <li className="dropitems">
                    {" "}
                    <input
                      value="ethnicwear"
                      type="radio"
                      name="bag"
                      id=""
                    />{" "}
                    ethnic wear
                  </li>
                  <li className="dropitems">
                    {" "}
                    <input
                      value="gotaglaza"
                      type="radio"
                      name="bag"
                      id=""
                    />{" "}
                    gota glaze
                  </li>
                  <li className="dropitems">
                    {" "}
                    <input
                      value="handpainted"
                      type="radio"
                      name="bag"
                      id=""
                    />{" "}
                    Handpainte
                  </li>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div className="droptitle">
                <ul
                  className="dropcat dropdown-toggle"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Price
                </ul>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <form>
                    <div className="form-group">
                      <label htmlFor="formControlRange">Price Range</label>
                      <div className="pricerange">
                        <input type="checkbox" name="price" id="" />
                        1000 to 2000
                        <br />
                        <input type="checkbox" name="price" id="" />
                        2000 to 4000
                        <br />
                        <input type="checkbox" name="price" id="" />
                        3000 to 5000
                        <br />
                        <input type="checkbox" name="price" id="" />
                        5000 to 10000
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div className="droptitle">
                <ul
                  className="dropcat dropdown-toggle"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Rating
                </ul>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li className="dropitems">
                    {" "}
                    <input value="bag" type="radio" name="bag" id="" /> 5 only
                  </li>
                  <li className="dropitems">
                    {" "}
                    <input value="bestseller" type="radio" name="bag" id="" /> 4
                    and up
                  </li>
                  <li className="dropitems">
                    {" "}
                    <input value="dresses" type="radio" name="bag" id="" /> 3
                    and up
                  </li>
                  <li className="dropitems">
                    {" "}
                    <input value="ethnicwear" type="radio" name="bag" id="" />2
                    and up{" "}
                  </li>
                  <li className="dropitems">
                    {" "}
                    <input value="gotaglaza" type="radio" name="bag" id="" /> 1
                    and up
                  </li>
                </div>
              </div>
            </div>
          </div>
  )
}
