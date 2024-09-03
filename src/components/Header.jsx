import React, { useRef } from "react";
import { Link } from 'react-router-dom';

import '../css/Header.css';

import instagramImg from '../images/instagram.webp';
import githubImg from '../images/github.png';
import linkedinImg from '../images/linkedin.png';


const HeaderLink = ({ to, text, selected = false }) => {
    const underlineRef = useRef(null);

    const handleMouseEnter = (e) => {
        const link = e.currentTarget.querySelector('span');
        const underline = underlineRef.current;
        const { width } = link.getBoundingClientRect();
        underline.style.width = `${width}px`;
    };

    const handleMouseLeave = () => {
        const underline = underlineRef.current;
        underline.style.width = '0';
    };

    return (
        <Link to={to} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="header-link" style={selected ? { textDecoration: 'underline' } : {}}>
                <span>
                    {text}
                </span>
                <div className="page-underline" ref={underlineRef}></div>
            </div>
        </Link>
    );
};

export const SocialLink = ({ type }) => {
    const underlineRef = useRef(null);

    const handleMouseEnter = (e) => {
        const link = e.currentTarget.querySelector('a');
        const underline = underlineRef.current;
        const { width } = link.getBoundingClientRect();
        underline.style.width = `${width}px`;
    };

    const handleMouseLeave = () => {
        const underline = underlineRef.current;
        underline.style.width = '0';
    };

    switch (type) {
        case 'instagram':
            return (
                <div className='social-link' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={instagramImg} alt=''></img>
                    <a href="https://www.instagram.com/peter.olsenn">Instagram</a>
                    <div className='social-underline' ref={underlineRef}></div>
                </div>
            )
        case 'github':
            return (
                <div className='social-link' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={githubImg} alt=''></img>
                    <a href="https://github.com/PeterOlsen1">GitHub</a>
                    <div className="social-underline" ref={underlineRef}></div>
                </div>
            )
        case 'linkedin':
            return (
                <div className='social-link' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={linkedinImg} alt=''></img>
                    <a href="https://www.linkedin.com/in/peterolsen2/">LinkedIn</a>
                    <div className="social-underline" ref={underlineRef}></div>
                </div>
            )
        default:
            return (
                <div></div>
            )
    }
}

const Header = ({ page }) => {
    return (
        <header>
            <div className="header-left">
                <p style={{ padding: 0, margin: 0 }}>
                    Peter Olsen 
                </p>
                <div className='inline-flex-center' style={{ gap: '20px' }}>
                    <SocialLink type='github' />
                    <SocialLink type='linkedin' />
                    <SocialLink type='instagram' />
                </div>
            </div>
            <div className="header-right">
                <HeaderLink to='/' text='Home' selected={page === 'home'} />
                <HeaderLink to='/projects' text='Projects' selected={page === 'projects'} />
                <HeaderLink to='/work' text='Work' selected={page === 'work'} />
            </div>
        </header>
    );
};

export default Header;