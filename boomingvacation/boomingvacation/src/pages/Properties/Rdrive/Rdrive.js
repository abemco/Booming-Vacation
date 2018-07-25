import React from 'react';

import bv15 from './BV15.jpg'

import { Container, Row, Col } from 'reactstrap';

class Example extends React.Component {
    render () {
        return (
        
        <Container>

            <Row>
                <Col size="md-3"><img src={bv15}></img></Col>
                <Col size="md-3"><img src={bv15}></img></Col>
                <Col size="md-3"><img src={bv15}></img></Col>
                <Col size="md-3"><img src={bv15}></img></Col>
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