import React, { Component } from 'react';
import { NavHashLink } from 'react-router-hash-link';

class Menu extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: 'orange', paddingTop: '80px', paddingBottom: '20px' }}>
                    <h1 className="ui header center aligned">
                        <i>/ / / CURRENTLY UNDER CONSTRUCTION / / /</i>
                    </h1>               
                </div>
            
            <div className="ui top fixed huge secondary pointing menu inverted" style={{ backgroundColor: '#1b1c1d', paddingTop: '10px' }}>
                
                <div className='ui container'>
                        <NavHashLink smooth to="#app" exact className="item">
                                    Jason MacDonald
                            </NavHashLink>
                    
                    <div className="right menu">
                
                            <NavHashLink smooth to="#about" exact className="item">
                                    About
                            </NavHashLink>
                            <NavHashLink smooth to="#resume" className="item">
                                    Resume
                            </NavHashLink>
                            <NavHashLink smooth to="/#portfolio" className="item">
                                    Portfolio
                            </NavHashLink>
                            <NavHashLink smooth to="/#testimonials" className="item">
                                    Testimonials
                            </NavHashLink>
                            <NavHashLink smooth to="/#contact" className="item">
                        Contact
                            </NavHashLink>
                    </div>
                    </div>
                </div>
                </div>
        );
    };
};

export default Menu;