import React, { useState, useRef, useContext} from 'react';
import axios from "axios";
import Data from "../../DataContext";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/Header.css';
import swal from 'sweetalert';
import "../../styles/BecomeAHost.css";
// import { Link } from 'react-router-dom';
axios.defaults.withCredentials=true;

export const BecomeHost = ({accessToken, profileName, userProfile}) => {

  const { isLoading, loadingProgress } = useContext(Data);

  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  const [data, setData] = useState({
    username:"",
    area: "",
    LC: "",
    RC: "",
    number: "",
    brand: "",
    model: "",
    year: "",
    capacity: "",
    type: "",
    engine: "",
    mileage: "",
    fuel: "",
    cost: "",
    gear: "",
});

  const imageInputRef = useRef([null]);

  const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {   
      e.preventDefault();
      try {
          const formData = new FormData();
          formData.append('username', data.username);
          formData.append('image', imageInputRef.current.files[0]);
          formData.append('area', data.area);
          formData.append('LC', data.LC);
          formData.append('RC', data.RC);
          formData.append('number', data.number);
          formData.append('brand', data.brand);
          formData.append('model', data.model);
          formData.append('year', data.year);
          formData.append('capacity', data.capacity);
          formData.append('type', data.type);
          formData.append('engine', data.engine);
          formData.append('mileage', data.mileage);
          formData.append('fuel', data.fuel);
          formData.append('gear', data.gear);
          formData.append('cost', data.cost);
         
          const url = "http://localhost:3500/car";
          const response= await axios.post(url, formData);
          console.log(response.data);
          swal("Good job!", "Your Car Details is Uploaded Successfully.", "success");
          navigate("/");

      } catch (error) {
          if ( 
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
          ) {
              setError(error.response.data.message);
          }
      }
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }; 

  return (
    <>
     {isLoading ? (
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${loadingProgress}%`}}></div>
        </div>
      ) : (
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
                    <img src={userProfile} className="profile-photo" alt="Profile" />
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
      </section>)}
      <section>
      <form id="forms" onSubmit={handleSubmit}>
        <h1 id="h11">Become a Host</h1>
        <div className="details">
            <div className="first">
                <label>Username</label><br />
                <input type="text" 
                name="username" 
                id="username" 
                onChange={handleChange}
                value={data.username}
                required
                /><br />

                <label>Car Images</label><br/>
                <input type="file"
                accept='image/*'
                name="image" 
                id="images"
                onChange={handleChange}
                ref={imageInputRef}
                required 
                multiple/><br/>

                <label>city</label><br/>
                <input type="text" 
                name="area" 
                id="Area" 
                onChange={handleChange}
                value={data.area}
                required
                autoComplete="off"/><br/>
        
                <label>Brand</label><br/>
                <input type="text" 
                name="brand" 
                id="Brand" 
                onChange={handleChange}
                value={data.brand}
                required
                autoComplete="off"/><br/>

                <label>Model</label><br/>
                <input type="text" 
                name="model" 
                id="Model" 
                onChange={handleChange}
                value={data.model}
                required
                autoComplete="off"/><br/>

                <label>Year</label><br/>
                <input type="text" 
                name="year" 
                id="Year" 
                onChange={handleChange}
                value={data.year}
                required
                autoComplete="off"/><br/>

                <label>License Number</label><br/>
                <input type="text" 
                name="LC" 
                id="LC" 
                onChange={handleChange}
                value={data.LC}
                required
                autoComplete="off"/><br/>

                <label>Gear</label><br/>
                <input type="text" 
                name="gear" 
                id="gear"
                onChange={handleChange}
                value={data.gear}
                required
                autoComplete="off"/><br/>

            </div>
            <div className="second">
            <label>Car Number</label><br/>
                <input type="text" 
                name="number" 
                id="number" 
                onChange={handleChange}
                value={data.number}
                required
                autoComplete="off"/><br/>

                <label>RC Number</label><br/>
                <input type="text" 
                name="RC" 
                id="RC" 
                onChange={handleChange}
                value={data.RC}
                required
                autoComplete="off"/><br/>

                <label>Engine</label><br/>
                <input type="text" 
                name="engine" 
                id="Engine" 
                onChange={handleChange}
                value={data.engine}
                required
                autoComplete="off"/><br/>

                <label>Mileage</label><br/>
                <input type="text" 
                name="mileage" 
                id="Mileage" 
                onChange={handleChange}
                value={data.mileage}
                required
                autoComplete="off"/><br/>

                <label>Seats</label><br/>
                <input type="text" 
                name="capacity" 
                id="Seats" 
                onChange={handleChange}
                value={data.capacity}
                required
                autoComplete="off"/><br/>

                <label>Type</label><br/>
                <input type="text" 
                name="type" 
                id="Type" 
                onChange={handleChange}
                value={data.type}
                required
                autoComplete="off"/><br/>

                <label>Fuel</label><br/>
                <input type="text" 
                name="fuel" 
                id="Fuel" 
                onChange={handleChange}
                value={data.fuel}
                required
                autoComplete="off"/><br/>

                <label>Cost/day</label><br/>
                <input type="text" 
                name="cost" 
                id="cost" 
                onChange={handleChange}
                value={data.cost}
                required
                autoComplete="off"/><br/>

            <button id="sub1">Submit</button>
            </div>         
        </div>
    </form>
    </section>
    </>
  )
}
