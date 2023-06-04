import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is AI-PSG?</a></p>
          <p><a href="#possibility">How does it Work</a></p>
          <p><a href="#features">Key Features</a></p>
          <p><a href="https://www.google.com/">Demo</a></p>
          
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      <form action="https://www.google.com/">
        <button href="button">AI - PSG</button>
      </form>

      </div>

     
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is AI-PSG?</a></p>
            <p><a href="#possibility">How does it Work</a></p>
            <p><a href="#features">How does it Work</a></p>
            
            
            
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            
            <button type="button"></button>
            
            
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;