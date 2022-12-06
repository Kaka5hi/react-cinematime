import React from 'react'
import './Footer.css'
import {RiMovieFill} from 'react-icons/ri'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-link-top">
                    <h1><RiMovieFill/>Cinematime</h1>
                    <ul className="social-links">
                        <li><i className="fa-brands fa-facebook-f"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-google-plus-g"></i></li>
                    </ul>
                </div>

                <div className="footer-link-bot">
                    <div>
                        <h1>Movies Catgegories</h1>
                        <ul className="footer-categories">
                            <li>action</li>
                            <li>adventur</li>
                            <li>crime</li>
                            <li>comedy</li>
                            <li>animation</li>
                            <li>drama</li>
                            <li>fantasy</li>
                            <li>action</li>
                            <li>adventur</li>
                            <li>crime</li>
                            <li>comedy</li>
                            <li>animation</li>
                            <li>drama</li>
                            <li>fantasy</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Legal</h1>
                        <ul className="footer-legal-links">
                            <li>terms of use</li>
                            <li>privacy policy</li>
                            <li>security</li>
                        </ul>
                    </div>
                    <div>
                        <h1>support</h1>
                        <ul className="support-links">
                            <li>faq</li>
                            <li>help center</li>
                            <li>contact</li>
                        </ul>
                    </div>                    
                </div>
            </div>
        </footer>
    )
}

export default Footer
