import React from 'react'

export const Footer = () => {
  return (
    <>
    {/* <!-- Footer --> */}
<footer className="page-footer font-small blue mt-5 pt-4">

  {/* <!-- Footer Links --> */}
  <div className="container-fluid text-center text-md-left">

    {/* <!-- Grid row --> */}
    <div className="row">

      {/* <!-- Grid column --> */}
      <div className="col-md-6 mt-md-0 mt-3">

        {/* <!-- Content --> */}
        <h5 className="text-uppercase m-0">Contact Us</h5>
        <hr  style={{backgroundColor:"#016D79",height:3,width:150,position:"absolute"}}/>
        <br />
        <p>
+01 123 456 7890
</p><p>info@glamist.com</p>

      </div>
      {/* <!-- Grid column --> */}

      <hr className="clearfix w-100 d-md-none pb-3"/>

    
      <div style={{position:"relative",right:"30%"}} className="col-md-3 mb-md-0 mb-3">

        {/* <!-- Links --> */}
        <h5 className="text-uppercase m-0">Quick Links</h5>
        <hr  style={{backgroundColor:"#016D79",height:3,width:150,position:"absolute"}}/>
<br />

        <ul className=" list-unstyled">
          <li>
            <a  href="#">just in </a>
          </li>
          <li>
            <a  href="#">Sale</a>
          </li>
          <li>
            <a  href="#">ethnic wear</a>
          </li>
          <li>
            <a  href="#">Sarees</a>
          </li>
        </ul>

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div style={{position:"relative",right:"30%"}} className="col-md-3 mb-md-0 mb-3">

        {/* <!-- Links --> */}
        <h5 className="text-uppercase m-0">Information</h5>
        <hr  style={{backgroundColor:"#016D79",height:3,width:150,position:"absolute"}}/>
<br />

        <ul className="list-unstyled">
          <li>
            <a href="#!">Contact us</a>
          </li>
          <li>
            <a href="#!">About us</a>
          </li>
          <li>
            <a href="#!">Jewellery care</a>
          </li>
          <li>
            <a href="#!">Privacy Policy</a>
          </li>
        </ul>

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </div>
  {/* <!-- Footer Links --> */}

  {/* <!-- Copyright --> */}
  <div className="footer-copyright text-center py-3">© 2022 Glamist. | 
  All Right Reserved |
    <a href="http://www.controlf5.in/">  Website Designing Company ControlF5</a>
  </div>
  {/* <!-- Copyright --> */}

</footer>
{/* <!-- Footer --> */}
    </>
  )
}
