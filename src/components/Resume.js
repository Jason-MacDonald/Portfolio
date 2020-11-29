import React, { Component } from 'react';

import resumeData from '../resumeData';

class Resume extends Component {
    render() {
        return (
            <div id="resume">
                <div className="ui grid container" style={{ paddingTop: '200px', paddingBottom: '200px' }}>
                    <div className="row">
                        <div className="four wide column">
                            <h1 className="ui header" style={{ borderBottom: 'teal solid'}}>
                                <i className="graduation cap icon"></i>
                                Education
                            </h1>
                        </div>
                        <div className="one wide column" />
                        <div className="eleven wide column">
                            <h1>{ this.props.resumeData.education[0].schoolName }</h1>
                            <h2><i>{this.props.resumeData.education[0].major} - { this.props.resumeData.education[0].graduationYear}</i></h2>
                            <h1>Achievements</h1>
                        </div>
                    </div>
                </div>
                {/* <div className="ui grid container" style={{ marginTop: '100px' }}>
                    <div className="row">
                        <div className="four wide column">
                            <h1 className="ui header" style={{ borderBottom: 'teal solid'}}>
                                <i className="industry icon"></i>
                                Employment
                            </h1>
                        </div>
                        <div className="one wide column" />
                        <div className="eleven wide column">
                            <h1>{ this.props.resumeData.employment[0].companyName }</h1>
                            <h2><i>{this.props.resumeData.employment[0].role}  { this.props.resumeData.employment[0].startDate} - { this.props.resumeData.employment[0].endDate}</i></h2>
                            <h1>Achievements</h1>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    };
};

export default Resume;