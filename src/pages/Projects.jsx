import React from "react";

import Title from "../components/Title";
import Project from "../components/Project";

import functionFinderImage from '../images/function_finder.png';
import plantProcessorImage from '../images/plant_processor.png';
import RAOinternalImage from '../images/rao_internal.png';
import busRouterImage from '../images/bus-router.png';

const Projects = () => {
    return (
        <div className="flex-center">
            <br /><br /><br />
            <Title text='My Projects' />
            <p style={{marginTop: "0px"}}>Click on a project to view the Git Repo (if it exists)</p>

            <br /><br />
            <div className="inline-flex-center" style={{width: '100%', gap: '40px'}}>
                <Project 
                    name='Bus Router' 
                    description='A simple single page website that uses the Metro Transit API to easily help UMN students check transit schedules.
                    Clicking this card will take you directly to the site.'
                    technologies={['HTML', 'CSS', 'JavaScript']}
                    url='https://peterolsen1.github.io/bus-router/'
                    image={busRouterImage} 
                />
                <Project 
                    name='Function Finder' 
                    description='A simple rust project to help eliviate the stress of finding functions all across JavaScript files.
                    It utilizes multiple threads to concurrently parse files, resulting in function data that is easily accessed by the user through a CLI.'
                    technologies={['Rust', 'Clap']}
                    url='https://github.com/PeterOlsen1/function-finder'
                    image={functionFinderImage} 
                />
                <Project 
                    name='RAO Internal Website' 
                    description='This was the first internal website developed for RAO Manufacting during my internship over summer 2024.
                    The app served many purposes, which primarily consisted of visualizing production data and moving systematic data entry online from pen and paper.
                    Alongside the app, an API suite was created to easily access data from the jBASE database.
                    No Git repo exists for this project.'
                    technologies={['React',  'Express', 'Chart.js', 'JavaScript', 'HTML', 'CSS', 'jBASE BASIC']}
                    image={RAOinternalImage}
                />
                <Project 
                    name='Plant Processor' 
                    description='My first attempt at a fullstack application, this plant processor is a way for users to keep track of when their plants were last watered, as well as view the plants of other users.
                    This project was completed as a means to teach myself how to use the Flask framework for server development; in the process, I also picked up MongoDB and Jinja templating.'
                    technologies={['Flask',  'Python', 'JavaScript', 'MongoDB', 'HTML', 'CSS', 'Jinja']}
                    url='https://github.com/PeterOlsen1/PlantProcessor'
                    image={plantProcessorImage}
                />
            </div>
        </div>
    )
}

export default Projects;