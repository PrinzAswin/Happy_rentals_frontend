import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Login/styles.module.css";
axios.defaults.withCredentials = true;

const Login = ({setAccessToken, setIsLoggedIn, setProfileName, setUserProfile }) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
 
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/login", data);
      const { username, image, accessToken } = response.data;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("profileName", username);
      localStorage.setItem("userProfile", image);
      localStorage.setItem("accessToken", accessToken);
      setProfileName(username);
      setUserProfile(image);
      setAccessToken(accessToken);
      console.log(accessToken);
      setIsLoggedIn(true);
      navigate('/');
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

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1 style={{ color: "#005f73" }}>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            <p
              style={{
                color: "#005f73",
                position: "relative",
                top: "-2.6rem",
                left: "9rem",
                cursor: "pointer",
              }}
              onClick={handleTogglePassword}
            >
              {showPassword ? "Hide" : "Show"}
            </p>
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Login
            </button>
          </form>
        </div>

        <div className={styles.right}>
          <h1>Hello Friend!</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
