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
          <CardSubtitle>Family vacation done right!</CardSubtitle>
          <CardText>This luxurious 4 bedroom home accommodates 10 and features its very own private pool 
            for relaxing in the Florida sunshine. Located in the Storey Lake Resort in Kissimmee FL, 
            this community offers a fitness center, a splash park, a lazy river, a sports court and even a 
            dock where kayak rentals are available for guests throughout their stay. Theme parks such as 
            Universal Studios, Volcano Bay and Disney World are just a 20-25 minute drive.</CardText>
          <CardTitle color="danger">Starting at $129 a night</CardTitle>
          <Button color="primary">Book Now</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={bv2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Windermere 23</CardTitle>
          <CardSubtitle>5 Ensuites</CardSubtitle>
          <CardText>This beautiful and modern 4 bedroom home accommodates 8 people and features its very 
            own private pool which is great for relaxing in the Florida sunshine. Located in the Storey 
            Lake Resort in Kissimmee FL, this gated community offers a fitness center, a splash park, a 
            lazy river, a sports court and even a lakeside dock where kayak rentals are available for 
            guests throughout their stay. Theme parks such as Universal Studios, Volcano Bay and Disney 
            World are just a 20 minute drive.</CardText>
          <CardTitle color="danger">Starting at $149 a night</CardTitle>
          <Button color="primary">Book Now</Button>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={bv3} alt="Card image cap" />
        <CardBody>
          <CardTitle>Windermere 24</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This beautiful and modern 4 bedroom home accommodates 8 people and features its very 
            own private pool which is great for relaxing in the Florida sunshine. Located in the Storey 
            Lake Resort in Kissimmee FL, this gated community offers a fitness center, a splash park, a 
            lazy river, a sports court and even a lakeside dock where kayak rentals are available for 
            guests throughout their stay. Theme parks such as Universal Studios, Volcano Bay and Disney 
            World are just a 20 minute drive.</CardText>
          <CardTitle color="danger">Starting at $149 a night</CardTitle>
          <Button color="primary">Book Now</Button>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={bv4} alt="Card image cap" />
        <CardBody>
          <CardTitle>Windermere 26</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This beautiful and modern 4 bedroom home accommodates 8 people and features its very 
            own private pool which is great for relaxing in the Florida sunshine. Located in the Storey 
            Lake Resort in Kissimmee FL, this gated community offers a fitness center, a splash park, a 
            lazy river, a sports court and even a lakeside dock where kayak rentals are available for 
            guests throughout their stay. Theme parks such as Universal Studios, Volcano Bay and Disney 
            World are just a 20 minute drive.</CardText>
          <CardTitle color="danger">Starting at $149 a night</CardTitle>
          <Button color="primary">Book Now</Button>
          
        </CardBody>
      </Card>

    </CardDeck>
    </div>
    
  );
};

export default Example;