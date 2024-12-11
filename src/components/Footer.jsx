import React from "react";
import '../css/Footer.css';
import { SocialLink } from "./Header.jsx";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="inline-flex-center" style={{gap: '10px'}}>
                <span>Created by Peter Olsen, 2024</span>
                <span>|</span>
                <Link to="/contact" style={{textDecoration: 'underline'}}>Contact Me</Link>
            </div>
            <br />
            <div className="inline-flex-center" style={{gap: '10px'}}>
                <SocialLink type='github' />
                <span>|</span>
                <SocialLink type='linkedin' />
                <span>|</span>
                <SocialLink type='instagram' />
            </div>
        </footer>
    )
}

export default Footer;