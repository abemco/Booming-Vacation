import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

 import bv1 from './BV1.jpg';
 import bv2 from './BV2.jpg';
 import bv3 from './BV3.jpg';
 import bv4 from './BV4.jpg';
 

const cardStyles = { paddingBottom: "30px" };
const Example = (props) => {
  return (
    
    <div style={cardStyles}>
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={bv1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Romeo Drive</CardTitle>
          {/* <CardSubtitle>Family vacation done right!</CardSubtitle> */}

          <CardText>

            <ul>
              <li type="square">4 bedrooms</li>
              <li type="square">4 bathrooms</li>
              <li type="square">12 guests</li>
              <li type="square">Private Pool</li>
              <li type="square">Free high speed wifi</li>
              <li type="square">Fitness center</li>
              <li type="square">On-site water park</li>
            </ul>
            
            </CardText>

          <CardTitle color="danger">Starting at $129 a night</CardTitle>
          <Button color="primary">Book Now</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={bv2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Windermere 23</CardTitle>
          {/* <CardSubtitle>5 Ensuites</CardSubtitle> */}

          <CardText>
            
          <ul>
              <li type="square">4 bedrooms</li>
              <li type="square">4 bathrooms</li>
              <li type="square">12 guests</li>
              <li type="square">Private Pool</li>
              <li type="square">Free high speed wifi</li>
              <li type="square">Fitness center</li>
              <li type="square">On-site water park</li>
            </ul>
            
            </CardText>

          <CardTitle color="danger">Starting at $149 a night</CardTitle>
          <Button color="primary">Book Now</Button>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={bv3} alt="Card image cap" />
        <CardBody>
          <CardTitle>Windermere 24</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}

          <CardText>

            <ul>
              <li type="square">4 bedrooms</li>
              <li type="square">4 bathrooms</li>
              <li type="square">12 guests</li>
              <li type="square">Private Pool</li>
              <li type="square">Free high speed wifi</li>
              <li type="square">Fitness center</li>
              <li type="square">On-site water park</li>
            </ul>

            </CardText>

          <CardTitle color="danger">Starting at $149 a night</CardTitle>
          <Button color="primary">Book Now</Button>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={bv4} alt="Card image cap" />
        <CardBody>
          <CardTitle>Windermere 26</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}

          <CardText>
            
          <ul>
              <li type="square">4 bedrooms</li>
              <li type="square">4 bathrooms</li>
              <li type="square">12 guests</li>
              <li type="square">Private Pool</li>
              <li type="square">Free high speed wifi</li>
              <li type="square">Fitness center</li>
              <li type="square">On-site water park</li>
            </ul>
            
            </CardText>

          <CardTitle color="danger">Starting at $149 a night</CardTitle>
          <Button color="primary">Book Now</Button>
          
        </CardBody>
      </Card>

    </CardDeck>
    </div>
    
  );
};

export default Example;