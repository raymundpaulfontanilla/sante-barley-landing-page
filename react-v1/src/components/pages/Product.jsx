import NavigationBar from "../NavigationBar";
import ProductHeading from "./ProductHeading";
import Container from "react-bootstrap/Container";
import { getProducts } from "../../data/sante-products";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function formatPrice(priceString) {
  const numericPrice = parseFloat(priceString.replace(/[^\d.]/g, ""));
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(numericPrice);
}

function Product() {
  const products = getProducts();

  return (
    <>
      <NavigationBar />
      <ProductHeading productHeading={"Our"} productHeadingTwo={"Products"} />
      <Container>
        <Row className="g-4">
          {products.map(({ id, productName, productImage, price }) => (
            <Col key={id} xs={12} md={6} lg={3}>
              <div className="d-flex flex-column align-items-center text-center p-3">
                <Image
                  src={productImage}
                  fluid
                  alt={`Product ${productName}`}
                  className="product-image mb-2"
                />
                <p className="fw-bold text-dark">{formatPrice(price)}</p>
              </div>
            </Col>
          ))}
          <div className="custom-button">
            <Button
              as={Link}
              to="https://www.mysante.com/store.htm?id=bethfonta"
              className="d-flex justify-content-center"
              style={{
                backgroundColor: "#0C9931",
                width: "200px",
                height: "50px",
                borderRadius: "50px",
                paddingTop: "10px",
              }}
            >
              View all Products
            </Button>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Product;
