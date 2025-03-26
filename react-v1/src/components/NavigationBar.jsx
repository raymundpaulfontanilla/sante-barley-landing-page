import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavigationBar() {
  return (
    <header>
      <Container fluid className="p-3 shadow custom-container">
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container fluid>
                <Navbar.Brand
                  href="#home"
                  className="fs-4"
                  aria-label="Go to home"
                >
                  Santé <span className="fw-bold">Barley</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link href="#about-us" aria-label="About us page">
                      About Us
                    </Nav.Link>
                    <Nav.Link href="#branches" aria-label="Branches page">
                      Products
                    </Nav.Link>
                    <Nav.Link href="#branches" aria-label="Branches page">
                      Branches
                    </Nav.Link>
                    <Nav.Link href="#contact-us" aria-label="Contact us page">
                      Contact Us
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default NavigationBar;
