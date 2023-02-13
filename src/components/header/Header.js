import React from 'react';
import "./header.css"
import Resume from "./../../img/Sero.pdf"
 const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>Hi, my name is <em>Sero</em></strong><br />
                        a frontend developer
                    </h1>
                    <div className="header__text">
                        <p>with passion for learning and creating.</p>
                    </div>
                    <a href={Resume} download="SeroCV" className="btn">Download CV PDF</a>
                </div>
            </header>
        </div>
    );
};

export default Header;