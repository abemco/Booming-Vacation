import React from 'react';

import './Footer.css';

import BVlogo2 from './BVlogo2.png';

const footerStyles = { backgroundColor: "white",
                       paddingTop: "15px",
                       position: "center" };

const nameStyles = {paddingLeft: "20%"};                 


class Footer extends React.Component {
render () {
    return (
    <div style={footerStyles}>
        <div className="container">
                
                <div className="row">
                    <div className="col-md-8 col-sm-6">
                        <img src={BVlogo2}></img>
                        
                        <ul className="list-inline">
                            
                        </ul>
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                       
                        <ul className="list-unstyled">
                            <li><p><strong><i className="fa fa-map-marker"></i> Address:</strong> 6258 Castelven Drive, Orlando, FL</p></li>
                            <li><p><strong><i className="fa fa-envelope"></i> Email:</strong> <a href="mailto:boomingvr@gmail.com?subject=Mail from Our Site">boomingvr@gmail.com</a></p></li>
                            <li><p><strong><i className="fa fa-phone"></i> Phone:</strong> +1 (407) 485-4180</p></li>
                            <li><p><strong><a href="https://www.instagram.com/boomingvacationhomes" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></strong></p></li>
                        </ul>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12" position="center">
                        <p style={nameStyles}>BOOMING VACATION HOMES &copy; 2018 Designed by Abe Neto & Jose Augusto - All Rights Reserved</p>
                    </div>
                </div>
                
            </div>
    </div>
    
);
}
}

export default Footer;