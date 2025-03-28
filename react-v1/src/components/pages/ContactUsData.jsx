import { FaPhone, FaFacebook } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/contact-link.css";
import GoogleMap from "../GoogleMap";

function ContactUsData({ mobileNumber, facebookProfile }) {
  return (
    <Container className="d-flex justify-content-center">
      <Row className="justify-content-center text-center mb-4">
        <Col>
          <address>
            <FaPhone />
            {"\u00A0"}
            <span>{mobileNumber}</span>
            <div>
              <FaFacebook className="facebook-icon" />
              {"\u00A0"}
              <a href={facebookProfile} target="_blank">
                Contact me on Facebook
              </a>
            </div>
          </address>
          <GoogleMap
            houseHeading={"House Location"}
            bootingHeading={"Booting Location"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUsData;
