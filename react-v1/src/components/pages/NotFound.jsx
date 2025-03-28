import NavigationBar from "../NavigationBar";
import SanteGlobalImage from "../SanteGlobalImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NotFound({ statusCode, notFoundMessage }) {
  return (
    <>
      <NavigationBar />
      <Container className="d-flex justify-content-center">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <SanteGlobalImage />
            <div className="d-flex justify-content-center align-items-center align-content-center">
              <h1>{statusCode}</h1>
              {"\u00A0"}
              <span>{notFoundMessage}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NotFound;
