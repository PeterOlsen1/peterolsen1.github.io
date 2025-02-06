import React from "react";

import Title from "../components/Title";
import Project from "../components/Project";

import functionFinderImage from '../images/function_finder.png';
import plantProcessorImage from '../images/plant_processor.png';
import RAOinternalImage from '../images/rao_internal.png';
import busRouterImage from '../images/bus-router.png';
import plantifulImage from '../images/plantiful.png';
import holySheetImage from '../images/holy-sheet.png';
import gopherHoursImage from '../images/gopher-hours.png';

const Projects = () => {
    return (
        <div className="flex-center">
            <br /><br /><br />
            <Title text='My Projects' />
            <p style={{marginTop: "0px"}}>Click on a project to view the Git Repo (if it exists)</p>

            <br /><br />
            <div className="inline-flex-center" style={{width: '100%', gap: '40px'}}>
                <Project
                    name='GopherHours' 
                    description='GopherHours was created as a project for my teaching methods in computer science course, where we were tasked with making some sort of project
                    to improve TA work. Since there is no online queue for UMN office hours, I felt it was a good idea to create one. Simply sign in with google, and you will be able
                    to create your own office hours, find office hours, and queue for them, all from your phone.'
                    technologies={['Svelte', 'Firebase', 'HTML', 'CSS', 'JavaScript']}
                    url='https://github.com/PeterOlsen1/gopher-hours'
                    image={gopherHoursImage} 
                />
                <Project 
                    name='HolySheet' 
                    description='A complex SPA that is designed with instrument practice in mind. HolySheet allows users to upload sheet music, record themselves playing along with the sheet music,
                    and edit their PDFs with a homemade in-browser PDF editor. This app was created as a project for CSCI 5117, so the git repo is not public. Cliking this card will take you to the site.'
                    technologies={['Ember.js', 'Firebase', 'Azure', 'HTML', 'CSS', 'JavaScript']}
                    url='https://holysheet-eb861.web.app/'
                    image={holySheetImage} 
                />
                <Project 
                    name='Gopher Transit' 
                    description='A simple single page website that uses the Metro Transit API to easily help UMN students check transit schedules.
                    Clicking this card will take you directly to the site.'
                    technologies={['HTML', 'CSS', 'JavaScript']}
                    url='https://peterolsen1.github.io/gopher-transit/'
                    image={busRouterImage} 
                />
                <Project 
                    name='Plantiful' 
                    description='A rebirthed version of my plant processor, Plantiful is a site that allows users to upload photos of their plants and
                    interact with others, all in a streamlined and nicely-styled way. Hopefully the link works but it is possible that render suspended our service. 😢'
                    technologies={['Flask', 'Jinja', 'PostgreSQL', 'SQLAlchemy']}
                    url='https://plantiful.onrender.com/'
                    image={plantifulImage} 
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