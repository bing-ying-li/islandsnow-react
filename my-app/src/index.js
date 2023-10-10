import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Navbar, NavDropdown, Row, Col, Image, Button, InputGroup, Form } from 'react-bootstrap';
import { Cart, Facebook, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><Facebook/></Nav.Link>
        <Nav.Link><Twitter/></Nav.Link>
        <Nav.Link><Pinterest/></Nav.Link>
        <Nav.Link><Instagram/></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><HouseFill/> </Nav.Link>
        <Nav.Link><Search/> </Nav.Link>
        <Nav.Link><PersonFill/> </Nav.Link>
        <NavDropdown title={<Cart/>}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
    <Image alt = "Island Snow Logo" className="img-fluid rounded mx-auto d-block py-1" src = "https://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png"/>
);

const MiddleMenu = () => (
  <Row className = "justify-content-center pt-3">
    <Col xs lg="1">
      <NavDropdown title={<strong>MEN</strong>}/>
    </Col>

    <Col xs lg="1">
      <NavDropdown title={<strong>WOMEN</strong>}/>
    </Col>

    <Col xs lg="1">
      <NavDropdown title={<strong>KIDS</strong>}/>
    </Col>

    <Col xs lg="1">
      <NavDropdown title={<strong>BRANDS</strong>}/>
    </Col>

    <Col xs lg="1">
      <strong>SEARCH</strong>
    </Col>

  </Row>
);

const FullWidthImage = () => (
  <Row>
    <Image className = "img-fluid pt-3" src = "https://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png" alt={"Center Image"}/>
  </Row>
);

const FooterMenu = () => (
  <footer>
    <Container>
      <Row>
        <Col>
          NAVIGATION
          <hr />
          <Nav>About Us</Nav>
          <Nav>Employment</Nav>
          <Nav>Videos</Nav>
        </Col>
        <Col>
          MAIN MENU
          <hr />
          <Nav>Men</Nav>
          <Nav>Women</Nav>
          <Nav>Kids</Nav>
        </Col>
        <Col>
          CONNECT
          <hr />
          <Nav>Sign up for the latest update</Nav>
          <Col sm={6}>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="email"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Join
              </Button>
            </InputGroup>
          </Col>
        </Col>
      </Row>
    </Container>
  </footer>
);

const IslandSnow = () => (
  <Container>
    <TopMenu/>
    <IslandSnowLogo/>
    <MiddleMenu/>
    <FullWidthImage/>
    <FooterMenu/>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);