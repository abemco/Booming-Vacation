import React from 'react';

import rd1 from './RD1.JPG'
import rd2 from './RD2.JPG'
import rd3 from './RD3.JPG'
import rd4 from './RD4.JPG'
import rd5 from './RD5.JPG'
import rd6 from './RD6.JPG'

import { Container, Row, Col } from 'reactstrap';

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
                
            <Row>
            <Col>.col</Col>
            </Row>

        </Container>
        );
    }
    }
    
    export default Example;