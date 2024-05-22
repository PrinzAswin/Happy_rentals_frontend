import React from 'react'
import '../../styles/Footer.css'
import logo from '../../images/logo.png'
export const Footer = () => {
  return (
    <>
    <hr/>
    <footer className="section-p1">
        
        <div className="col">
            <div className="foot-about">
                <ul className="f-about">
                    <li><img id="my-logo" src={logo} alt="" /></li>
                    <li><strong>Get to Know Us</strong></li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Releases</li>
                    <li>Journey is yours</li>
                </ul>
                <ul className="f-connect">
                    <li><strong>Connect with Us</strong></li>
                    <li><i className='bx bxl-facebook'></i> Facebook</li>
                    <li><i className='bx bxl-twitter'></i> X/Twitter</li>
                    <li><i className='bx bxl-instagram'></i> Instagram</li>
                    <li><i className='bx bxl-youtube'></i> YouTube</li>
                </ul>
                <ul className="money">
                    <li><strong>Make money with Us</strong> </li>
                    <li>Host on Happy rentals</li>
                    <li>sell under ashopy Accelerator</li>
                    <li>Protect and Build Your Brand</li>
                    <li>Happy rental Global Selling</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise Your Products</li>
                    <li>Fulfilment by Happy rental</li>
                </ul>

            </div>
            <div className="copy">
                <p> &#169; 2024, Happy Rentals.in, Inc. or its affiliates And Conditions applied.</p>
            </div>
        </div>
    </footer>
    </>
  )
};
