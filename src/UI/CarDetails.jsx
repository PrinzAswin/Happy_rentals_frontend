import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Data from '../DataContext';
import axios from "axios";
import swal from 'sweetalert';
import "./carDetailscss.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import exter1 from "./TATA/exter-exterior-left-front-three-quarter-3.jpg";
import exter2 from "./TATA/exter-exterior-left-rear-three-quarter.webp";
import exter3 from "./TATA/exter-exterior-left-side-view.webp";
import exter4 from "./TATA/exter-exterior-rear-view-4.webp";
import star from "../pics/rating.png";
import seat from "../pics/car-seat.png";
import cartype from "../pics/car-type.png";
import engine from "../pics/engine.png";
import gear from "../pics/gear-shift.png";
import gpay from "../pics/google-pay-logo.png";
import kazuka from "../pics/kazuka.jpg";
import luffy from "../pics/luffy.jpeg";
import mileage from "../pics/mileage.png";
import visa from "../pics/Visa-Logo.png";
import phonepay from "../pics/PhoneP.jpeg";
import QR from "../pics/QR-CODE.jpg";
import QRV from "../pics/qr.mp4";
import fuel from "../pics/fuel-type.png";
import pay from "../pics/Plain.png";
import arrow from "../pics/arrow.png";

export const CarDetails = ({accessToken, profileName, userProfile}) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    const { handleBook } = useContext(Data);
    const credit = () => {
        document.getElementById("card-form").style.display = "block";
    }

    const upi = () => {        
        const credit = document.getElementById('UPI-details');
        credit.style.display = "block";
    }

    const d = () => {
        document.getElementById("TC").style.display = "block";
    }


    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
     <section id="header">
        <div id="happylogo">
        </div>
        <ul id="nav-bar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/becomehost">Become a Host</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/aboutus">About us</Link></li>
        </ul>
        <ul id="nav-bar">
              <li>
                <div className="dropdown">
                  <Link className="profile" onClick={() => setShowDropdown(!showDropdown)}>
                    <img src={userProfile} className="profile-photo" />
                    <h3>{profileName}</h3>
                  </Link>
                  {showDropdown && (
                    <div className="dropdown-content">
                      <Link to="/mycars" className='mycarstyle'>My Cars</Link><hr />
                      <Link onClick={handleLogout}>Logout</Link>
                    </div>
                  )}
                </div>
              </li>
        </ul>
      </section>
        <div id="Swiper_container">
            <div id="car-details">
                <h1 id="carname">Suzuki Ertiga 2018</h1>
                <div id="rating">
                    <img src={star} alt="rating" id="rat"/>
                    <span id="rv">0</span>
                </div>
                <p id="reviews">0 Reviews</p>
            </div>

            <div id="carswiper">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide><img src={exter1} alt='cars'/></SwiperSlide>
                <SwiperSlide><img src={exter2} alt="cars" /> </SwiperSlide>
                <SwiperSlide><img src={exter3} alt="cars" /> </SwiperSlide>
                <SwiperSlide><img src={exter4} alt="cars" /> </SwiperSlide>
            </Swiper>
            </div>
            <div className="car-facilites">
            <div className="engine">
                <img src={engine} alt="engine" className="engine-icon" />
                <p>1199CC</p>
            </div>
            <div className="mileage">
                <img src={mileage} alt="mileage" className="mileage-icon" />
                <p>19 - 23.06KM/L</p>
            </div>
            <div className="fuel-type">
                <img src={fuel} alt="fuel" className="fuel-icon" />
                <p>Petrol</p>
            </div>
            <div className="seat-capacity">
                <img src={seat} alt="seat-capacity" className="seat-icon" />
                <p>6</p>
            </div>
            <div className="gear">
                <img src={gear} alt="gear" className="gear-icon" />
                <p>Manual/CNG</p>
            </div>
            <div className="car-type">
                <img src={cartype} alt="type" className="car-type-icon" />
                <p>SUV</p>
            </div>
        </div>
        <div className="Reviews">
            <h2 className="title">Reviews</h2>
            <div className="user-reviews-container">   
                <div id="user-review"><br/>
                    <h4 className="user-review">
                        No reviews
                    </h4>
                </div>
            </div>
            <div className="write-a-review">
                <form>
                    <p className="title">Write A Review</p>
                    <textarea id="post_review" cols="50" rows="10" placeholder="  My Experience with this car...."></textarea>
                    <p className="title">Rating</p>
                    <input type="text" id="rating23" /><br/>
                    <button type="submit" onClick={(e)=> {e.preventDefault(); swal("Review Uploaded!", "Your Review is Uploaded Successfully.", "success");}} className="submit"><img src={arrow} alt="arrow" className="arrow" />
                    Upload Review</button>
                </form>
            </div>
        </div>
        <div id="payments">
            <div className="head">
                <p className="title">Payments</p>
                <div className="icons">
                    <img src={visa} alt="visa" className="visa" />
                    <img src={gpay} alt="Gpay" className="gpay" />
                    <img src={phonepay} alt="PhonePe" className="phonepe" />
                </div>
            </div>
            <div className="methods">
                <form>
                    <div className="credit">
                        <h3 className="card" onClick={credit} >Credit card / Debit card / ATM</h3>
                        <div id="card-form">
                            <div className="card-display">
                                <div className="card-details">
                                    <div className="number">
                                        <label className="card-number">Card-number</label>
                                        <input type="number" className="card-number-value" placeholder="XXX-XXXX-XXXX" /><br/>
                                    </div>
                                    <div className="cvv-exp">
                                        <label className="cvv">CVV</label>
                                        <input type="text" className="cvv-value" /><span className="exp">EXP</span><input type="number" className="exp-value" />
                                    </div>
                                </div>
                                <img src={pay} alt="pay" className="people" />
                            </div>
                        </div>
                    </div>
                    <div className="UPI">
                        <h3 className="card" onClick={upi}>UPI</h3>
                        <div id="UPI-details">
                            <label className="UPI-ID">UPI-ID</label>
                            <input type="text" className="UPI-ID-value" />
                            <p className="or"><b>Or</b></p>
                            <p className="scan"> Scan QR-Code</p>
                            <div className="images-videos">
                                <img src={QR} alt="qr" className="qr" />
                                <video className="upi" src={QRV} loop="loop" autoPlay="autoplay"></video>
                            </div>
                        </div>
                    </div>
                    <input type="checkbox" id="tcc" /><span className="tcs"/>By Clicking this I agree to <a onClick={d} className="tca">Terms & Conditions.</a><span/>
                    <section id="TC">
                        <p className="title">Terms & Conditions</p>
                        <div className="tccon">
                            <div className="vechicle-use-terms">
                                <p className="vechicle">Vehicle Use Terms:</p>
                                <ul>
                                    <li className="terms">Only the renter(you)is allowed to operate the vehicle,unlse otherwise specified.</li>
                                    <li className="terms">You must have a valid driver's license and represent that it isnot modified,suspended,revoked,or restricted.</li>
                                </ul>
                            </div>
                            <div className="booking-and-payments">
                                <p className="booking">Booking and Payments</p>
                                <ul>
                                    <li className="terms">Booking can be made online by filing up the booking form provided.</li>
                                    <li className="terms">Payment can be made through credit/debit cards.</li>
                                    <li className="terms">You can make a booking for any person other than the cardholder,but you need to provide details of both the cardholder(for payment) and the user (for booking).</li>
                                </ul>
                            </div>
                            <div className="ownership-and-copyright">
                                <p className="owenership">Ownership and Copyright</p>
                                <ul>
                                    <li className="terms">The content of the rental company's website is for general information and use only.</li>
                                    <li className="terms">Reproduction of any material on the webiste is prohibited without prior consent.</li>
                                    <li className="terms">Trademarks used on the webiste are acknowledged.</li>
                                </ul>
                            </div>
                            <div className="user-content">
                                <p className="user">User Content</p>
                                <p>Posting defamatory,obscence,pornographic,profane,threating,or unlawful material in forums or user feedback sections is prohibited.</p>
                                <p>The rental company will cooperate with law enforcement authorities if such materials are posted.</p>
                                <p>The company reserves th right to chage,edit orremove any user material that violates policies.</p>
                            </div>
                        </div>
                       
                    </section>
                    <br />
                    <button type="submit" onClick={(e)=>{handleBook(e)}} id="book-car">Book Car</button>
                </form>
            </div>
        </div>
        </div>
    </>
  )
}
