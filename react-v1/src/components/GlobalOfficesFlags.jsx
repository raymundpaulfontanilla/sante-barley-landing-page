import { getFlags } from "../data/sante-global-offices-flags";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function GlobalOfficesFlags() {
  const flags = getFlags();
  return (
    <>
      <Container>
        <Row as="ul">
          {flags.map(({ flagCDNImage, countryName }) => (
            <Col
              as="li"
              key={flagCDNImage}
              className="list-unstyled d-flex gap-3 mb-3"
              xs={12}
              md={6}
              lg={4}
            >
              <Image
                src={flagCDNImage}
                alt={countryName}
                fluid
                thumbnail
                objectFit={"contain"}
                width={"40px"}
                height={"30px"}
              />
              {countryName}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default GlobalOfficesFlags;
