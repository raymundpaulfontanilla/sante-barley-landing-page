import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Diabetes({ link }) {
  const videoId = link.split("youtu.be/")[1] || link.split("v=")[1];
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Row>
        <Col xs={12} md={8} lg={10}>
          <figure>
            {!isPlaying ? (
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Diabetes Thumbnail"
                style={{ cursor: "pointer", width: "100%" }}
                onClick={() => setIsPlaying(true)}
              />
            ) : (
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </figure>
        </Col>
      </Row>
    </div>
  );
}

export default Diabetes;
