import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

 import bv1 from './BV1.jpg';
 import bv2 from './BV2.jpg';
 

const cardStyles = { paddingBottom: "30px" };
const Example = (props) => {
  return (
    
    <div style={cardStyles}>
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={bv1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button color="primary">Book Now</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={bv2} alt="Card image cap" />
        <CardBody>
          <CardTitle>Storey Lake</CardTitle>
          <CardSubtitle>5 Ensuites</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="primary">Book Now</Button>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button color="primary">Book Now</Button>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="primary">Book Now</Button>
          
        </CardBody>
      </Card>

    </CardDeck>
    </div>
    
  );
};

export default Example;