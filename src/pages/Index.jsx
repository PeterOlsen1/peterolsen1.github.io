// import logo from './logo.svg';
import React, { useEffect, useRef } from 'react';

import '../css/App.css';
import '../css/Home.css'
import Title from '../components/Title.jsx';
import selfImage from '../images/me_kiwi.jpg';
import selfImagePicnic from '../images/me_picnic.jpeg';


//npm run deploy -- -m "mmm"
//to commit

const Index = () => {
    let originalText = "Peter Olsen";
    let text = "Peter Olsen";
    let n = text.length;
    let direction = 1;
    let animationFrameId = null;

    function displayText(text) {
        document.querySelector('.head').innerHTML = text;
    }

    async function changeText() {
        if (direction) {
            text = text.slice(0, -1);
            if (text.length === 0) {
                direction = 0;
            }
        } else {
            text += originalText[text.length];
            if (text.length === n) {
                direction = 1;
            }
        }
    }

    async function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function animate() {
        changeText();
        await delay(200);
        displayText(text);

        if (text.length === 0 || text.length === n) {
            setTimeout(() => {
                animationFrameId = requestAnimationFrame(animate);
            }, 1000);
        } else {
            animationFrameId = requestAnimationFrame(animate);
        }
    }

    useEffect(() => {
        displayText("Peter Olsen");

        let underscore = document.querySelector('.underscore');
        let underscoreInterval = setInterval(() => {
            underscore.style.opacity = (underscore.style.opacity == '1') ? '0' : '1';
        }, 500);

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            clearInterval(underscoreInterval);
        };
    }, []);

    return (
        <div className="App">
            <div className='flex-center'>
                <br></br>
                <br></br>
                <br></br>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div className="head title"></div><div className="underscore title">_</div>
                </div>
                <small>Thanks for stopping by 🤠</small>
                <div className='inline-flex-center green-container'>
                    <div className='main-body-container'>
                        <div className='main-body-element'>
                        <span style={{fontWeight: 'bold'}}>who am i?</span>
                            <span>
                                My name is Peter, and I'm a student currently studying computer science at the University of Minnesota - Twin Cities.
                                Aside from coding, my interests lie in weightlifting, cooking, and playing the piano (15 years strong!). By far, my favorite
                                hobby is playing the piano. So much so that I almost majored in piano instead of computer science! For those interested,
                                I'm currently learning Liszt's <i>Reminiscences de Norma</i>.
                            </span>
                        </div>
                        <div className='main-body-element'>
                            <span style={{fontWeight: 'bold'}}>what do i work on?</span>
                            <span>
                                My greatest focus in my education so far has been on web development. I've completed coursework in both basic web development and
                                advanced webdev, which focuses primarily on the use and learning of frameworks. I loved it so much I decided to TA
                                internet programming!
                            </span>
                            <span>
                                In addition to web development, I'd love to learn more about 
                                systems programming, human computer interaction, and networking.
                            </span>
                        </div>
                        <div className='main-body-element'>
                            <span style={{fontWeight: 'bold'}}>what AM i working on?</span>
                            <span>
                                Last semester, I was able to complete two major projects, including:
                                <ol>
                                    <li>A complex sheet music webapp 🎹</li>
                                    <li>An exploration and analysis of searching algorithms 🔍</li>
                                </ol>
                                This semester, I have more time for my personal projects, and I plan to
                                make a sort of TA-student portal where you can connect with TAs and
                                queue for office hours extremely easily. Check out GopherHours in my projects
                                section to see more!
                            </span>
                        </div>
                    </div>
                    <div style={{width: '30%'}}>
                        <img src={selfImage} alt='me!'/>
                        <img src={selfImagePicnic} alt="me but at a picnit" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;