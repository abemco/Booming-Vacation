import React from 'react';

import './Footer.css';


class Footer extends React.Component {
render () {
    return (
    <div>
        <div className="container">
                
                <div className="row">
                    <div className="col-md-8 col-sm-6">
                        <h3>BOOMING VACATION HOMES</h3>
                                
                        <p>Lorem</p>

                        <ul className="list-inline">
                            
                            <li className="list-inline-item"><a href="https://www.instagram.com/boomingvacationhomes" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="mailto:boomingvr@gmail.com?subject=Mail from Our Site"><i class="fas fa-at"></i></a></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-4 col-sm-6">
                        <h3>Say hello:</h3>
                        <ul className="list-unstyled">
                            <li><p><strong><i className="fa fa-map-marker"></i> Address:</strong> 121 S. Orange Ave Suite 1110 N. Tower Orlando-FL USA 32801</p></li>
                            <li><p><strong><i className="fa fa-envelope"></i> Email:</strong> <a href="mailto:boomingvr@gmail.com?subject=Mail from Our Site">boomingvr@gmail.com</a></p></li>
                            <li><p><strong><i className="fa fa-phone"></i> Phone:</strong> +1 (407) 485-4180</p></li>
                        </ul>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <p>&copy; 2018 Designed by Abe Neto & Jose Augusto- All Rights Reserved</p>
                    </div>
                </div>
                
            </div>
    </div>
    
);
}
}

export default Footer;