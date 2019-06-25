import React from 'react';
import { Carousel, Card, Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import image1 from './slider/image1.png';
import image2 from './slider/image2.png';
import image3 from './slider/image3.png';
import card1 from './images/card1.jpeg';
import card2 from './images/card2.jpeg';
import card3 from './images/card3.jpeg';

function App() {
  return (  
    <React.Fragment>  
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          width="800"
          height="400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          width="800"
          height="400"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          width="800"
          height="400"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container>
      <Row>      
        <Col>
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src={card2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button>Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src={card3} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>        
      </Row>
    </Container>
    </React.Fragment>
);
}

export default App;
