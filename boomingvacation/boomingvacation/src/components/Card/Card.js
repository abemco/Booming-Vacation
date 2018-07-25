import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

 import Rdrive from '../../pages/Properties/Rdrive/Rdrive'

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
              <li><i class="fas fa-bed"></i>    4 Bedrooms</li>
              <li><i class="fas fa-shower"></i>    4 Bathrooms</li>
              <li><i class="fas fa-users"></i>    12 Guests</li>
              <li><i class="fas fa-swimmer"></i>    Private Pool</li>
              <li><i class="fas fa-wifi"></i>    Free High Speed WiFi</li>
              <li><i class="fas fa-dumbbell"></i>    Fitness Center</li>
              <li><i class="fas fa-swimming-pool"></i>    On-site Water Park</li>
            </ul>
            
            </CardText>

          <CardTitle color="danger">Starting at $129 a night</CardTitle>
          <a className="btn btn-primary" href="/properties/1">Book Now</a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={bv2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Windermere 23</CardTitle>
          {/* <CardSubtitle>5 Ensuites</CardSubtitle> */}

          <CardText>
            
          <ul>
              <li><i class="fas fa-bed"></i>    4 Bedrooms</li>
              <li><i class="fas fa-shower"></i>    4 Bathrooms</li>
              <li><i class="fas fa-users"></i>    12 Guests</li>
              <li><i class="fas fa-swimmer"></i>    Private Pool</li>
              <li><i class="fas fa-wifi"></i>    Free High Speed WiFi</li>
              <li><i class="fas fa-dumbbell"></i>    Fitness Center</li>
              <li><i class="fas fa-swimming-pool"></i>    On-site Water Park</li>
          </ul>
            
            </CardText>

          <CardTitle color="danger">Starting at $149 a night</CardTitle>
          <a className="btn btn-primary" href="/properties/1">Book Now</a>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={bv3} alt="Card image cap" />
        <CardBody>
          <CardTitle>Windermere 24</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}

          <CardText>

             <ul>
              <li><i class="fas fa-bed"></i>    4 Bedrooms</li>
              <li><i class="fas fa-shower"></i>    4 Bathrooms</li>
              <li><i class="fas fa-users"></i>    12 Guests</li>
              <li><i class="fas fa-swimmer"></i>    Private Pool</li>
              <li><i class="fas fa-wifi"></i>    Free High Speed WiFi</li>
              <li><i class="fas fa-dumbbell"></i>    Fitness Center</li>
              <li><i class="fas fa-swimming-pool"></i>    On-site Water Park</li>
            </ul>

            </CardText>

          <CardTitle color="danger">Starting at $149 a night</CardTitle>
          <a className="btn btn-primary" href="/properties/1">Book Now</a>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={bv4} alt="Card image cap" />
        <CardBody>
          <CardTitle>Windermere 26</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}

          <CardText>
            
          <ul>
              <li><i class="fas fa-bed"></i>    4 Bedrooms</li>
              <li><i class="fas fa-shower"></i>    4 Bathrooms</li>
              <li><i class="fas fa-users"></i>    12 Guests</li>
              <li><i class="fas fa-swimmer"></i>    Private Pool</li>
              <li><i class="fas fa-wifi"></i>    Free High Speed WiFi</li>
              <li><i class="fas fa-dumbbell"></i>    Fitness Center</li>
              <li><i class="fas fa-swimming-pool"></i>    On-site Water Park</li>
            </ul>
            
            </CardText>

          <CardTitle color="danger">Starting at $149 a night</CardTitle>
          <a className="btn btn-primary" href="/properties/1">Book Now</a>
          
        </CardBody>
      </Card>

    </CardDeck>
    </div>
    
  );
};

export default Example;