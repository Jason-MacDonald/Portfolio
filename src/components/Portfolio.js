import React from 'react';

const Portfolio = () => {
    return (
        <div id="portfolio" style={{ backgroundColor: 'teal', paddingTop: '200px', paddingBottom: '200px' }}>
            <h1 className="ui header inverted center aligned">
                <i className="puzzle icon"></i>
                Projects
            </h1>
            <br />
            <div className="ui three cards container">
                <div className="card">
                    <div className="image">
                        <img src="https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Types-of-Web-Dev.jpg" alt="project example"></img>
                    </div>
                    <div className="content">
                        <div className="header">project name</div>
                        <div className="meta">
                            React - Redux
                        </div>
                        <div className="description">
                            Something something
                        </div>
                    </div>
                    
                </div>
                <div className="card">
                    <div className="image">
                        <img src="https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Types-of-Web-Dev.jpg" alt="project example"></img>
                    </div>
                    <div className="content">
                        <div className="header">project name</div>
                        <div className="meta">
                            React - Redux
                        </div>
                        <div className="description">
                            Something something
                        </div>
                    </div>
                    
                </div>
                <div className="card">
                    <div className="image">
                        <img src="https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Types-of-Web-Dev.jpg" alt="project example"></img>
                    </div>
                    <div className="content">
                        <div className="header">project name</div>
                        <div className="meta">
                            React - Redux
                        </div>
                        <div className="description">
                            Something something
                        </div>
                    </div>
                    
                </div>
            </div>        
        </div>
    );
};

export default Portfolio;