import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import resumeData from '../resumeData';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Testimonials from "./Testimonials";

const App = () => {
    return (
        <div id="app">
            
            <BrowserRouter>
                <Menu />
                <Header resumeData={resumeData} />
                
                <Route path="/">
                    <About resumeData={resumeData} />
                    <Resume resumeData={ resumeData } />
                    <Portfolio resumeData={ resumeData } />
                    <Testimonials resumeData={ resumeData } />
                    <Footer resumeData={ resumeData } />
                </Route>   
            </BrowserRouter>
        </div>
    );
};

export default App;