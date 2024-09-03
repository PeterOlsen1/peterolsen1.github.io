// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/App.css';
import './css/Home.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Projects from './pages/Projects.jsx';
import Index from './pages/Index.jsx';
import Work from './pages/Work.jsx';


//npm run deploy -- -m "mmm"
//to commit


function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/work" element={<Work />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
