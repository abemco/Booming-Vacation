import React from 'react';

// import w13 from './W13.jpg'
// import w14 from './W14.jpg'
// import w15 from './W15.jpg'
// import w16 from './W16.jpg'
// import w17 from './W17.jpg'

import { Container, Row, Col } from 'reactstrap';

const divStyles = { paddingTop: "30px" };

class Example extends React.Component {
    render () {
        return (
        
        <Container>

            <Row>
                {/* <Col size="md-3"><img src={w13}></img></Col>
                <Col size="md-3"><img src={w14}></img></Col>
                <Col size="md-3"><img src={w15}></img></Col> */}
                
                {/* <Col size="sm-2"><img src={bv16}></img></Col>
                <Col size="sm-2"><img src={bv17}></img></Col> */}
            </Row>
                
            <div style={divStyles}>
            <Row>
            <Col> 
            
                <p>Storey Lake Resort is situated in Kissimmee. It features a garden, pool views and free WiFi.

                The holiday home is equipped with a satellite flat-screen TV. The kitchen is fitted with a dishwasher and an oven, as well as coffee machine.

                The holiday home offers an outdoor pool. Guests can also relax in the shared lounge area.

                The Villages is 11.2 miles from Storey Lake Resort. The nearest airport is Orlando Sanford International Airport, 35.4 miles from the accommodation.</p>
                
            <ul>
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