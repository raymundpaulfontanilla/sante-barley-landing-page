import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GoogleMap = ({ houseHeading, bootingHeading }) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <h3>{houseHeading}</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1712083207315!6m8!1m7!1slUcHly3Rock9wZwRUzSlLw!2m2!1d14.3180521!2d121.0213089!3f164.08!4f85.28!5f0.7820865974627469"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
        <Col xs={12} md={6} lg={6} className="mb-3">
          <h3>{bootingHeading}</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1712083207315!6m8!1m7!1sQpZNeyjt8hOaxUOS8ZOzVQ!2m2!1d14.3295168!2d121.0342688!3f243.00!4f74.16!5f0.7820865974627469"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default GoogleMap;
