import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PCOS({ link }) {
  const embedUrl = link.replace("youtu.be/", "www.youtube.com/embed/");

  return (
    <div>
      <Row>
        <Col xs={12} md={8} lg={10}>
          <iframe
            width={"100%"}
            height={"315"}
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </div>
  );
}

export default PCOS;
