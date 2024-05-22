import React, { useState, useContext }from 'react';
import Data from "../../DataContext";
import axios from "axios";
import '../../UI/Filteredcars.css';
// import "../Mycars/Mycars.css";
import { Link } from "react-router-dom";
import review from "../../images/review.jpeg";
import star from "../../images/star.jpeg";
import trips from "../../images/trips.jpeg";
import host from "../../images/host.jpeg";


export const Mycars = ({accessToken, profileName, userProfile}) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  const { myCar } = useContext(Data);
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
    
    <h1 className='mycarsh1'>myCars</h1>
    <div className="container2">
      <div className="sidebar">
        <form>
          <div>
            <img className="hostimg" src={host} width="30" alt="host" /><span id="host">Host</span>
          </div>
        </form>
      </div>  
      <div className="cars">
                {  Array.isArray(!myCar) == [] ? myCar.map((car, index) => (
                  <div key={index} className="car">
                    <div className="cardetails">
                    <img src={Array.isArray(car.img) ? car.img[0] : car.img} height="40" width="30" id="carimage"alt="Car" />
                        <div className="cartext">
                            <p className="carname">{`${car.brand} ${car.model} ${car.year}`}</p>
                            <div className="review">
                                <img src={review} className='ima'/><p>10+ Reviews</p>
                                <img src={star} className='ima'/><p>3.5 Rating</p>
                                <img src={trips} className='ima'/><p>6 Trips</p><br />
                            </div>
                            <p id="af">Additional Facilities:</p>
                            <div className="icons">
                                <i className="fa-solid fa-chair"></i><span className='seat_icon'>{car.capacity}</span>
                                <i className="fa-solid fa-gas-pump"></i><span className='fuel_icon'>{car.fuel}</span>
                                <i className='bx bx-car'></i><span className='type_icon'>{car.type}</span>
                                <Link to="/cardetails"><button type="submit" id="view">View Car</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="payments">
                        <p className="days">Price For 3 Days</p>
                        <p className="price">₹ {parseInt(car.cost) * 3}</p>
                        <p className="days">Price For Per Day</p>
                        <p className="price">₹ {parseInt(car.cost)}</p>
                    </div>
                </div>
                )) 
                :( 
                <div className="No_results">
                    <h1 className="No_results_h1">No results Found!</h1>
                </div>)} 
            </div>
    </div> 
    </>
  )
}