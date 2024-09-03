import React from "react";

import '../css/Work.css';
import Title from "../components/Title";

const Work = () => {
    return (
        <div className="flex-center">
            <br /><br /><br />
            <Title text='Work Experience' />
            <p style={{marginTop: "0px"}}>My technical work experience</p>

            <br /><br />
            <div className="inline-flex-center work-container">
                <div className="work-header">
                    <div>
                        RAO Manufacturing
                        <div className='subtext' style={{paddingLeft: '15px'}}>
                            Software Engineering Intern
                        </div>
                    </div>
                    <div className='subtext' style={{textAlign: 'right', flexGrow: 1, paddingTop: '10px'}}>
                        May 2024 - August 2024
                    </div>
                </div>
                <div className="work-body">
                    Being my first technical internship, my time at RAO manufacturing taught me a lot about the software development process, and overall workflow.
                    The main project that I worked on was an internal webapp to display data about past production runs to provide insight into future decisions.
                    Additionally, the app also contained functionality to allow supervisors to systematically enter data online, as opposed to on paper.
                    <br /><br />
                    My project was developed in an agile development environment, as there was much need for user input and revision since the app is used very frequently.
                    <br /><br />
                    Some features of the app include interactive Chart.js data visualization, a live-updating page for viewing and updating production data, 
                    a complex email system to notify employees of important information, and an API server in the jBASE database to allow for future users to easily access historical data.
                </div>
                <br />
                <div className="dividing-line"></div>
                <div className="work-header">
                    <div>
                    University of Minnesota Twin-Cities
                        <div className='subtext' style={{paddingLeft: '15px'}}>
                            Computer Science Teaching Assistant (CSCI 1133, CSCI 4131)
                        </div>
                    </div>
                    <div className='subtext' style={{marginLeft: 'auto'}}>
                        August 2023 - Present
                    </div>
                </div>
                <div className="work-body">
                    My work as a teaching assistant has developed my interpersonal skills immensely; my role as a TA was to explain problems in a way that would
                    facilitate students' learning, which majorly improved my communication skills.
                    <br />
                    In my job as a TA, I wore many hats: 
                    <ul>
                        <li>In my position as a lab leader, I gained leadership experience directing other TAs, '
                        and gained experience teaching fundamental concepts to classes of ~30 students.</li>
                        <li>As an instructor, I gained experience facilitating learning through explanation.</li>
                        <li>As a grader, I gained experience revising assignments based on how the students learn best.</li>
                    </ul>
                    So far, I only have experience as a TA for the introductory Python course, CSCI 1133. Starting fall 2024 semester,
                    I am assigned to internet programming, CSCI 4131. This will give me more experience solving more complex problems on a regular basis.
                    Plus, who doesn't love internet programming?
                </div>
            </div>
        </div>
    )
}

export default Work;
