import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Movies from './Movies';

const clientId = "671863786229-bdpn2863uk4tf7doac20mvjuvlmrfdmp.apps.googleusercontent.com";

function App() {
  
  const [loading, setLoading] = useState('Loading...');
  const [user, setUser] = useState(null);
  
  const handleLoginSuccess = (response) => {
    console.log("Login Success ", response);
    setUser(response.profileObj);
    setLoading();
  }
 
  const handleLoginFailure = error => {
    console.log("Login Failure ", error);
    setLoading();
  }
 
  const handleLogoutSuccess = (response) => {
    console.log("Logout Success ", response);
    setUser(null);
  }
 
  const handleLogoutFailure = error => {
    console.log("Logout Failure ", error);
  }
 
  const handleRequest = () => {
    setLoading("Loading...");
  }
 
  const handleAutoLoadFinished = () => {
    setLoading();
  }
  
  return (
    <div style={{display:'grid', justifyContent: 'center', width: '100%'}} className="movies-body">
      <h3 style={{textAlign: 'center'}}>Movie Finder</h3>
      {user ? <div style={{width : '90vw'}}>
      <GoogleLogout
          clientId={clientId}
          onLogoutSuccess={handleLogoutSuccess}
          onFailure={handleLogoutFailure}
        />
        <Movies/>
      </div> :
        <GoogleLogin
          clientId={clientId}
          buttonText={loading}
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          onRequest={handleRequest}
          onAutoLoadFinished={handleAutoLoadFinished}
          isSignedIn={true}
        />}
    </div>
  );
}

export default App;
