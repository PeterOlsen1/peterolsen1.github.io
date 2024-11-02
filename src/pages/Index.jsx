// import logo from './logo.svg';
import React from 'react';

import '../css/App.css';
import '../css/Home.css'
import Title from '../components/Title.jsx';
import selfImage from '../images/me.JPG';


//npm run deploy -- -m "mmm"
//to commit


const Index = () => {
    return (
        <div className="App">
            <img src='./images/github.png' alt=''></img>
            <div className='flex-center'>
                <br></br>
                <br></br>
                <br></br>
                <Title text='Welcome to my Website!' />
                <br></br>
                {/* <div className='about-me'>
                    About me:
                </div> */}
                <div className='inline-flex-center green-container'>
                    <div className='main-body-container'>
                        <div className='main-body-element'>
                            <span style={{fontWeight: 'bold'}}>who am i?</span>
                            <span>
                                My name is Peter, and I'm a student currently studying computer science at the University of Minnesota - Twin Cities.
                                Aside from coding, my interests lie in weightlifting, playing the piano (15 years strong!), and cooking.
                            </span>
                        </div>
                        <div className='main-body-element'>
                            <span style={{fontWeight: 'bold'}}>what do i work on?</span>
                            <span>
                                My current focus in my education is on web development. I've completed coursework in both basic web development and
                                advanced webdev, which focuses primarily on the use and learning of frameworks. I loved it so much I decided to TA
                                internet programming!
                            </span>
                            <span>
                                In addition to web development, I'd love to learn more about 
                                AI/ML, compilers, natural language processing, and systems programming.
                                {/* <span className='fading-text-mask'><span className='fading-text'>programming languages, ...</span></span>  */}
                                {/* (basically every subfield of computer science). */}
                            </span>
                        </div>
                        <div className='main-body-element'>
                            <span style={{fontWeight: 'bold'}}>what am i CURRENTLY working on?</span>
                            <span>
                                This current semester, I don't have much time for personal projects (aside from my <a href='https://peterolsen1.github.io/gopher-transit/' style={{textDecoration: 'underline'}} target='_blank' rel="noreferrer">MetroTransit app</a>), however 
                                I'm currently working on a few large class projects, including:
                                <ol>
                                    <li>A complex sheet muisc webapp 🎹</li>
                                    <li>An exploration and analysis of searching algorithms 🔍</li>
                                </ol>
                                Which should be included on this site by the end of the semester.
                                If you want to see my progress on those, check out the public repos on my&nbsp;
                                <a href='https://github.com/PeterOlsen1' style={{textDecoration: 'underline'}} target='_blank' rel="noreferrer">Github</a>
                                {/* I'm currently working on a project that serves two purposes:
                                <ol>
                                    <li>Learn rust 🦀</li>
                                    <li>Parse files on multiple threads to allow a user to locate information about their functions</li>
                                </ol>
                                Find more about it <a href='https://github.com/PeterOlsen1/function-finder' style={{textDecoration: 'underline'}} target='_blank' rel="noreferrer">here</a> */}
                            </span>
                        </div>
                    </div>
                    <div style={{width: '30%'}}>
                        <img src={selfImage} alt='me!' style={{height: '100%', width: '100%', border: '1px solid black', marginLeft: '20px'}}/>
                        {/* <img src={selfImageNYC} alt='me!' style={{height: '50%', width: '50%', border: '1px solid black', marginLeft: '20px'}}/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
