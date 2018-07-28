import React from 'react';

// import w7 from './W7.jpg'
// import w8 from './W8.jpg'
// import w9 from './W9.jpg'
// import w10 from './W10.jpg'
// import w11 from './W11.jpg'

import { Container, Row, Col } from 'reactstrap';

const divStyles = { paddingTop: "30px" };

class Example extends React.Component {
    render () {
        return (
        
        <Container>

            <h3>Windermere 24</h3>
            <br></br>

            <Row>
                {/* <Col size="md-3"><img src={w7}></img></Col>
                <Col size="md-3"><img src={w8}></img></Col>
                <Col size="md-3"><img src={w9}></img></Col> */}
                
                {/* <Col size="sm-2"><img src={bv10}></img></Col>
                <Col size="sm-2"><img src={bv11}></img></Col> */}
            </Row>
                
            <div style={divStyles}>
            <Row>
            <Col> 
            
                <p>Storey Lake Resort is situated in Kissimmee. It features a garden, pool views and free WiFi.

                The holiday home is equipped with a satellite flat-screen TV. The kitchen is fitted with a dishwasher and an oven, as well as coffee machine.

                The holiday home offers an outdoor pool. Guests can also relax in the shared lounge area.

                The Villages is 11.2 miles from Storey Lake Resort. The nearest airport is Orlando Sanford International Airport, 35.4 miles from the accommodation.</p>
                
            <ul className="text-success">
              <li><i class="fas fa-bed"></i>    4 Bedrooms</li>
              <li><i class="fas fa-shower"></i>    4 Bathrooms</li>
              <li><i class="fas fa-users"></i>    12 Guests</li>
              <li><i class="fas fa-swimmer"></i>    Private Pool</li>
              <li><i class="fas fa-wifi"></i>    Free High Speed WiFi</li>
              <li><i class="fas fa-dumbbell"></i>    Fitness Center</li>
              <li><i class="fas fa-swimming-pool"></i>    On-site Water Park</li>
            </ul>

            </Col>
            </Row>
            </div>

        </Container>
        );
    }
    }
    
    export default Example;