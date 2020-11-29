import React, { Component } from 'react';
import { NavHashLink } from 'react-router-hash-link';

class Header extends Component {
    renderSocials() {
        return (
            this.props.resumeData.socialLinks.map((socialLink, index) => {
                return (

                    <a key={ index }href={DataTransferItem.url} target="">
                            <i className={ socialLink.className + ' icon'} />
                        </a>

                );
            })
        );
    };

    render() {
        return (
            <div className="pusher">
                
                <div className="ui inverted vertical masthead center aligned segment" style={{ minHeight: '700px' }}>
                    
                    <div className="ui text container">
                        <h1 className="ui header inverted" style={{ marginTop: '4em', fontSize: '4em', fontWeight: 'normal' }}>
                            Jason MacDonald
                    </h1>
                        <h2 style={{ fontWeight: 'normal', fontSize: '1.7em' }}>Turning coffee into code.</h2>
                        <div style={{ marginTop: '50px'}}>
                            {this.renderSocials()}
                        </div>                  
                    </div>
                </div>
                </div>
        );
    };
};

export default Header; 