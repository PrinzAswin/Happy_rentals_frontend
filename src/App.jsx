import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from '../src/components/Header/Header';
import { Aboutus } from './Pages/AboutUs/Aboutus';
import { FAQs } from "./Pages/FAQS/FAQs";
import { BecomeHost } from './Pages/BecomeHost/BecomeHost';
import Main from "./LoginComponents/Main/Main"
import Signup from "./LoginComponents/Signup/Signup"
import Login from "./LoginComponents/Login/Login";
import { Filteredcars } from "./UI/Filteredcars";
import { Mycars } from "./Pages/Mycars/Mycars";
import { CarDetails } from './UI/CarDetails';
import { SearchLocation } from './UI/SearchLocation';
import { DataContext } from "./DataContext";

function App() {
  const user = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileName, setProfileName] = useState("Guest");
  const [userProfile, setUserProfile] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [ accessToken, setAccessToken ] = useState("");


  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      setIsLoggedIn(true);
      const profileName = localStorage.getItem("profileName");
      const userProfile = localStorage.getItem("userProfile");
      const accessToken = localStorage.getItem("accessToken");
      setProfileName(profileName);
      setUserProfile(userProfile);
      setAccessToken(accessToken);
    }
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(progress => {
        const newProgress = progress + 1;
        if (newProgress >= 100) {
          setIsLoading(false);
          clearInterval(interval);
        }
        return newProgress;
        
      });
    }, 19); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${loadingProgress}%`}}></div>
        </div>
      ) : (
        <DataContext accessToken={accessToken}>
        <Routes>
          <Route path='/' element={<Header 
          isLoggedIn={isLoggedIn} 
          profileName={profileName} 
          userProfile={userProfile} />} />

          <Route path='/becomehost' element={<BecomeHost 
          accessToken={accessToken} 
          profileName={profileName} 
          userProfile={userProfile} />} /> 

          <Route path='/aboutus' element={<Aboutus 
          profileName={profileName} 
          userProfile={userProfile} />} />

          <Route path='/faqs' element={<FAQs 
          profileName={profileName} 
          userProfile={userProfile} />} /> 

          {isLoggedIn && <Route path="/" element={<Main />} />}

          <Route path="/signup" element={<Signup />} />

          <Route path="/searchlocation" element={<SearchLocation  
          />} />
          
          <Route path="/mycars" element={<Mycars 
          accessToken={accessToken}
          profileName={profileName} 
          userProfile={userProfile} />} /> 

          <Route path="/filteredcars" element={<Filteredcars 
          // result={result} 
          accessToken={accessToken} 
          profileName={profileName} 
          userProfile={userProfile} />} />

          <Route path="/cardetails" element={<CarDetails 
          accessToken={accessToken} 
          profileName={profileName} 
          userProfile={userProfile} />} />

          <Route path="/login" element={<Login 
          setAccessToken={setAccessToken} 
          setIsLoggedIn={setIsLoggedIn} 
          setProfileName={setProfileName} 
          setUserProfile={setUserProfile} />} />

          <Route path="/header" element={<Navigate replace to="/login" />} />
        </Routes>
      </DataContext>
      )}
    </div>
  );
}

export default App;


