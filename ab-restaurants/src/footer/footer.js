import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

class Footer extends Component {
  render() {
    return <React.Fragment>  
      <div className="ab-footer">
      <Container>
        <Row>
          <Col lg="6"> 
            <div>
              <h5>WHAT MAKES AB SPECIAL</h5>
              <p>A unique 'do-it-yourself' dining experience where diners grill on the Table, their choice of Meat, Seafood and Vegetables starters served on skewers to their preference. A central live grill "Wish Grill" dishing out exotic varieties of veggies and game birds take the experience of dining to a while new level.</p>
            </div>
          </Col>
          <Col>
            <div>
              <h5> Our Links</h5>
              <ul>
                <li> Home </li>
                <li> Menu </li>
                <li> Menu </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <h5>Keep in touch with us</h5>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <div className="ab-footer-sitemap">
      <Container>
      <Row >
          <Col> 
            <div>
              <h5>WHAT MAKES AB SPECIAL</h5>
              <p>A unique 'do-it-yourself' dining experience where diners grill on the Table, their choice of Meat, Seafood and Vegetables starters served on skewers to their preference. A central live grill "Wish Grill" dishing out exotic varieties of veggies and game birds take the experience of dining to a while new level.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </React.Fragment>  
  }
}

export default Footer;
