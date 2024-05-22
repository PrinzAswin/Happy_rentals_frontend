import React, { useState } from 'react';
import '../../styles/Header.css';
import { Link } from 'react-router-dom';
import '../../styles/Aboutus.css'; // Import your CSS file for styling

export const Aboutus = ({ profileName, userProfile}) => {
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
      <div className="about-us-container">
      <div className="about-us-content">
        <h1 style={{color:"#1874a8"}}>About Us</h1>
        <p id='parag'>
        Happy Rentals is the leading marketplace for car sharing in emerging markets,with over 20,000 cars on its technology-driven platform across India, Indonesia, and Egypt. Happy Rentals empowers host entrepreneurs to safely and easily share their cars to earn additional passive income. Guests in the Happy Rentals community enjoy a diverse, affordable selection of cars to unlock memorable driving experiences with friends and family. Founded in 2013 and headquartered in Bengaluru, India, Happy Rentals employs over 250 people and operates in over 45 cities across India, Indonesia, and Egypt. Uri Levine, the co-founder of mobility unicorns Waze and Moovit, currently serves as Happy Rentals's Chairman of the Board.
         </p><br/>
         <p>
Want A Specific Car? We've Got It All:
Rent Tata Nexon | Rent Honda Jazz | Rent Hyundai Creta | Rent Maruti Brezza | Rent Mahindra | Rent XUV500 | Rent Hyundai Verna | Rent Maruti Swift | Rent Toyota Innova | Rent Reanult Kwid | Rent Maruti Baleno | Rent Mahindra TUV300| Rent Maruti Swift | Rent Hyundai i20 | Rent Maruti Ertiga | Rent Volkswagen Polo | Rent Hyundai Venue | Rent Hyundai Eon | Rent Maruti S-Cross | Rent Maruti | Rent Dzire | Rent Honda Amaze | Rent Hyundai Verna | Rent Maruti Ciaz | Rent Hyundai Creta | Rent Renault Triber | Rent Maruti S-Cross | Rent Toyota Innova | Rent Mahindra TUV300 | Rent Tata Tiago | Rent Maruti Wagon R | Rent Datson Redi-Go | Rent Maruti Alto | Rent Hyundai Grand i10 | Rent Hyundai Xcent | Rent Maruti S-Presso | Rent Hyundai Santro | Rent Hyundai Verna | Rent Maruti Ignis | Rent Nissan Magnite | Rent Toyota Glanza | Rent Honda City | Rent Maruti Dzire | Rent Datson GO T | Rent Nissan Sunny | Rent Renault Kiger | Rent Hyundai Aura | Rent Renault Duster | Rent Mahindra Bolero | Rent Tata Altroz | Rent Ford EcoSport</p><br/>
<p>
If you're looking for cars to rent near you, Happy Rentals is your perfect solution! Rent cars in 3 easy steps: Pick your date & time of travel Select the vehicle of your choice from our wide range of cars Book & travel away.</p><br/>
      </div>
    </div>
    </>
    
  );
};

