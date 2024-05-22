import { useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import defaultpic from "./profile.png";
import styles from "./styles.module.css";
axios.defaults.withCredentials=true;


const Signup = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const imageInputRef = useRef(null);

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const [showsignpass, setsignpass] = useState(false);

    const handlesignpassword = () => {
        setsignpass(!showsignpass);   
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('username', data.username);
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('image', imageInputRef.current.files[0]);

            const url = "http://localhost:3500/reg";
            const response= await axios.post(url, formData);
            navigate("/login");
            console.log(response.data);

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
    const [imagepreview, setImagepreview] = useState(defaultpic);

    const handleImagechange = (e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagepreview(reader.result);
            };
            reader.readAsDataURL(file);
        } 
    };  

    const handlepic = () => {
        document.getElementById("fileInput").click();
    }

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login"><button type="button" className={styles.white_btn}>Login</button></Link>	
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        
                        <div onClick={handlepic} className={styles.Profile_upload}>
                            <input 
                                type="file" 
                                name="image"
                                accept="image/*"
                                onChange={handleImagechange}
                                ref={imageInputRef}
                                style={{display:"none"}}
                                className={styles.profile}
                                id="fileInput"
                                required
                            />
                            {imagepreview ? (
                                <img src={imagepreview} alt="preview" className={styles.previewImg} />
                            ) : (
                                <img src={defaultpic} alt="default" className={styles.no_preview} />
                               
                            )}
                        </div>
                        <h4 style={{color:"#005f73", cursor:"pointer"}}>Upload profile photo</h4><br/>

                        <input 
                            type="text"
                            placeholder="Name"
                            name="username"
                            onChange={handleChange}
                            value={data.username}
                            required
                            className={styles.input}
                        />
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
                            type={showsignpass? 'text' : 'password'}
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        <p style={{color:"#005f73",position:"relative",top:"-2.6rem",left:"9rem",cursor:"pointer"}} onClick={handlesignpassword}>{showsignpass ? "Hide" : "Show" }</p>
                        {error && <div className={styles.error_msg}>{error}</div>}
                        
                        <button type="submit" className={styles.green_btn}>Sign Up</button>	
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
