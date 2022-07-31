import React from 'react'
import "../css/footer.css"
export default function Footer() {
  return (
    <div>
    <div className="footer">
  <div className="inner-footer">
    <div className="footer-items">
      <h1>IIIT LUCKNOW</h1>
      <p></p>
    </div>


    <div className="footer-items">
      <h3>Quick Links</h3>
      <div className="border1"></div> 
        <ul>
          <a href=""><li>Home</li></a>
          <a href="#"><li>Search</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
    </div>

    <div className="footer-items">
      <h3>Contact us</h3>
      <div className="border1"></div>
        <ul>
          <li><i className="fa fa-map-marker" aria-hidden="true"></i>deep, dev</li>
          <li><i className="fa fa-phone" aria-hidden="true"></i>9696969696</li>
          <li><i className="fa fa-envelope" aria-hidden="true"></i>lcb2021004@gmail.com</li>
        </ul> 
      

        <div className="social-media">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-google-plus-square"></i></a>
        </div> 
    </div>
  </div>
  

  <div className="footer-bottom">
    Copyright &copy; deepdev.
  </div>
</div>
  

    </div>
  )
}
