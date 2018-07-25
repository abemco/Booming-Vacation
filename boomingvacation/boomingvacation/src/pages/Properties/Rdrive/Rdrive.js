import React from 'react';

import rd1 from './RD1.JPG'
import rd2 from './RD2.JPG'
import rd3 from './RD3.JPG'

import { Container, Row, Col } from 'reactstrap';

const divStyles = { paddingTop: "30px" };

class Example extends React.Component {
    render () {
        return (
        
        <Container>

            <Row>
                <Col size="md-3"><img src={rd1}></img></Col>
                <Col size="md-3"><img src={rd2}></img></Col>
                <Col size="md-3"><img src={rd3}></img></Col>
                
                {/* <Col size="sm-2"><img src={bv15}></img></Col>
                <Col size="sm-2"><img src={bv15}></img></Col> */}
            </Row>
                
                
            <div style={divStyles}>
            <Row>
            <Col> 
            
            Storey Lake Resort is situated in Kissimmee. It features a garden, pool views and free WiFi.

The holiday home is equipped with a satellite flat-screen TV. The kitchen is fitted with a dishwasher and an oven, as well as coffee machine.

The holiday home offers an outdoor pool. Guests can also relax in the shared lounge area.

The Villages is 11.2 miles from Storey Lake Resort. The nearest airport is Orlando Sanford International Airport, 35.4 miles from the accommodation. 

             </Col>
            </Row>
            </div>

        </Container>
        );
    }
    }
    
    export default Example;