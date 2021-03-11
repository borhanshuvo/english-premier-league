import React from 'react';
import bgImage from '../../english_league.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <img className="header-image" src={bgImage} alt=""/>
            <h1 className="header-text">English Premier League</h1>
        </div>
    );
};

export default Header;