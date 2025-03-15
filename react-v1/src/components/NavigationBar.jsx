import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavigationBar() {
  return (
    <Container fluid className="p-3 shadow custom-container">
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="#home" className="fs-4">
                Santé <span className="fw-bold">Barley</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#home">About Us</Nav.Link>
                  <Nav.Link href="#link">Branches</Nav.Link>
                  <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default NavigationBar;
