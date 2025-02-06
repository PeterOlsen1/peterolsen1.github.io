import React from "react";
import '../css/Footer.css';
import { SocialLink } from "./Header.jsx";
import { Link } from "react-router-dom";

const Footer = () => {
    function doStuff() {
        document.body.style.color = 'white';
        document.body.style.backgroundColor = 'black';
    }
    return (
        <footer>
            <div className="inline-flex-center" style={{gap: '10px'}}>
                <span>Created by Peter Olsen, 2024</span>
                <span>|</span>
                <span>Check out my socials</span>
            </div>
            <br />
            <div className="inline-flex-center" style={{gap: '10px'}}>
                <SocialLink type='github' />
                <span>|</span>
                <SocialLink type='linkedin' />
                <span>|</span>
                <SocialLink type='instagram' />
            </div>
            <br ></br>
            {/* <button onClick={doStuff}>do stuff</button> */}
        </footer>
    )
}

export default Footer;