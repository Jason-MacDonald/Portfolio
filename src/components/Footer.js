import React, { Component } from 'react';

class Footer extends Component {
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
            <div id="contact" className="pusher">
                <div className="ui inverted vertical masthead center aligned segment" style={{ paddingTop: '200px', paddingBottom: '200px' }}>
                    <div className="ui text container">
                        <h2 className="ui header inverted">Get in touch</h2>
                        <div style={{ marginTop: '50px'}}>
                            {this.renderSocials()}
                        </div>                  
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;