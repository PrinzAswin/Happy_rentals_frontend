import React, { useState, useContext } from 'react';
import '../../styles/Header.css';
import { Link } from 'react-router-dom';
import { Slider } from "../../components/Slider/Slider";
import { Footer } from '../Footer/Footer';
import { SearchLocation } from '../../UI/SearchLocation';
import Locdata from '../../UI/Locdata.json';
import Data from "../../DataContext";
import Profile from "./profile.png";

export const Header = ({isLoggedIn, profileName, userProfile}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { MyCars } = useContext(Data);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    window.location.load();
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
          { !isLoggedIn ? (
            <li className='loginstyle'>
              <Link to="/login">
                <i className='bx bx-user-circle signlogo'></i>
                Sign-in
              </Link>
            </li>
          ) : (
            <>
              <li>
                <div className="dropdown">
                  <Link className="profile" onClick={() => setShowDropdown(!showDropdown)}>
                    {userProfile ? <img src={userProfile} className="profile-photo" alt='profile' />
                    : <img src={Profile} className="EmptyProfilephoto" alt='no-profile' />}
                    <h3>{profileName}</h3>
                  </Link>
                  {showDropdown && (
                    <div className="dropdown-content">
                      <button onClick={()=>{MyCars()}} className='mycar__style'>My Cars</button><hr />
                      <Link onClick={handleLogout}>Logout</Link>
                    </div>
                  )}
                </div>
              </li>
            </>
          )}
        </ul>
      </section>
      <Slider />
      <SearchLocation placeholder="Pick-up Location" data={Locdata} />
      <Footer />
    </>
  );
}
