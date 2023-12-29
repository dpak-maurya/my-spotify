import React from 'react';
import './Login.css';
import { accessUrl } from './spotify';

function Login() {
  return (
    <div className='login-page'>
      <div className='brand-logo'>
        <img
          className='image-18'
          src='images/image-18.png'
          alt='spotify-logo'
        />
      </div>
      <div className='extra-space'></div>
      <a href={accessUrl} className='login'>
        <div className='login2'>Login</div>
      </a>
    </div>
  );
}

export default Login;
