import React from "react";
import '../css/Footer.css';
import { SocialLink } from "./Header.jsx";

const Footer = () => {
    return (
        <footer>
            <div className="inline-flex-center" style={{gap: '10px'}}>
                <span>Produced by Peter Olsen, 2024</span>
                <span>|</span>
                <a href='mailto:peterolsen455@gmail.com' style={{textDecoration: 'underline'}}>Email Me!</a>
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