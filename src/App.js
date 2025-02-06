// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

import './css/App.css';
import './css/Home.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Projects from './pages/Projects.jsx';
import Index from './pages/Index.jsx';
import Work from './pages/Work.jsx';
import Contact from './pages/Contact.jsx';
// import Piano from './pages/Piano.jsx';


//npm run deploy -- -m "mmm"
//to commit


function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Peter Olsen</title>
                <meta name="description" content="Peter Olsen's personal website." />
                <meta name="keywords" content="Peter Olsen, Software Engineer, University of Minnesota" />
                <meta name="author" content="Peter Olsen" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/work" element={<Work />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    {/* <Route path="/piano" element={<Piano />} /> */}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
