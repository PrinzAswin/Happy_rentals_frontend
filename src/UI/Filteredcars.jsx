import React, { useState,  useContext} from 'react';
import Data from "../DataContext";
import "./Filteredcars.css";
import { Link } from 'react-router-dom';
import review from "../images/review.jpeg";
import star from "../images/star.jpeg";
import trips from "../images/trips.jpeg"; 

export const Filteredcars = ({ profileName, userProfile }) => {
    const { search } = useContext(Data);
    const [showDropdown, setShowDropdown] = useState(false);


    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <>
            <section id="header">
                <div id="happylogo"></div>
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
            <div className="container">
                <div className="filter">
                    <p id="filter">Filters</p>
                    <details>
                        <summary>Brands</summary>
                        <input type="checkbox" value="Tata" />TATA<br />
                        <input type="checkbox" value="Suzuki" />Suzuki<br />
                        <input type="checkbox" value="Mahindra" />Mahindra<br />
                        <input type="checkbox" value="Honda" />Honda<br />
                    </details>
                    <details>
                        <summary>Seats</summary>
                        <input type="checkbox" value="8" />8<br />
                        <input type="checkbox" value="6" />6<br />
                        <input type="checkbox" value="5" />5<br />
                        <input type="checkbox" value="4" />4<br />
                    </details>
                    <details>
                        <summary>Type</summary>
                        <input type="checkbox" value="Suv" />SUV<br />
                        <input type="checkbox" value="Sedan" />Sedan<br />
                        <input type="checkbox" value="Omni" />Omni<br />
                        <input type="checkbox" value="Jeep" />Jeep<br />
                    </details>
                    <details>
                        <summary>Fuel Type</summary>
                        <input type="checkbox" value="Petrol" />Petrol<br />
                        <input type="checkbox" value="Diesel" />Diseal<br />
                        <input type="checkbox" value="EV" />EV<br />
                    </details>
                    <button id="apply">Apply</button>
                    <button type="reset" id="r">Reset</button>
                </div>

                <div className="cars">
                { Array.isArray(search) >= [0] ? search.map((car, index) => (
                <div key={index} className="car">
                    <div className="cardetails">
                    <img src={Array.isArray(car.img) ? car.img[0] : car.img} height="30" width="40" id="carimage"alt="Car" />
                        <div className="cartext">
                            <p className="carname">{`${car.brand} ${car.model} ${car.year}`}</p>
                            <div className="review">
                                <img src={review} className='ima'/><p>0 Reviews</p>
                                <img src={star} className='ima'/><p>0 Rating</p>
                                <img src={trips} className='ima'/><p>0 Trips</p><br />
                            </div>
                            <p id="af">Additional Facilities:</p>
                            <div className="icons">
                                <i className="fa-solid fa-chair"></i><span className='seat_icon'>{car.capacity}</span>
                                <i className="fa-solid fa-gas-pump"></i><span className='fuel_icon'>{car.fuel}</span>
                                <i className='bx bx-car'></i><span className='type_icon'>{car.type}</span>
                                <Link to="/cardetails"><button id="view">View Car</button></Link>
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
    );
};