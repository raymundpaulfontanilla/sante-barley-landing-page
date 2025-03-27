import { getBranches } from "../../data/sante-branches";
import NavigationBar from "../NavigationBar";
import BranchHeading from "./BranchHeading";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Branch() {
  const branches = getBranches();
  const [searchValue, setSearchValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setIsTyping(value.length > 0);
  };

  const branchFilter = branches.filter(({ branchName }) =>
    branchName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <NavigationBar />
      <BranchHeading branchHeading={"Branches"} />
      <Container>
        <Row>
          <Col xs={12} md={10} lg={12}>
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={handleInputChange}
            />
            {isTyping && branchFilter.length > 0
              ? branchFilter.map(({ id, branchName }) => (
                  <ul key={id} className="mt-3">
                    <li>{branchName}</li>
                  </ul>
                ))
              : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Branch;
