import React from 'react';
import instagram from "../../img/icons/instagram.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import "./footer.css"
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item"><a href="https://instagram.com/13sero21?igshid=YmMyMTA2M2Y=" target="_blank"  rel="noreferrer"><img src={instagram} alt="Link" /></a></li>
                            <li className="social__item"><a href="https://github.com/21Sero"  target="_blank"  rel="noreferrer"><img src={gitHub} alt="Link" /></a></li>
                            <li className="social__item"><a href="https://www.linkedin.com/in/sero-harutyunyan-05284a250/"  target="_blank"  rel="noreferrer"><img src={linkedIn} alt="Link" /></a></li>
                        </ul>
                        <div className="copyright">
                            <p>© 2022 https://github.com/21Sero</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;