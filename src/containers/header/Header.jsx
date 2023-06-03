import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ff.png';
import './header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">AI - Pretrained Solution Generative Engine</h1>
      <p>Experience the new AI-PSG which helps you to generate solutions, based on the trained data. It uses ML to predict the output and generate the response.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
