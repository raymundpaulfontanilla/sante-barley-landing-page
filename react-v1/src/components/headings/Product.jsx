function Product({ productHeading, productHeadingTwo }) {
  return (
    <>
      <h1 className="d-flex justify-content-center">
        {productHeading}
        {"\u00A0"}
        <span className="fw-bold">{productHeadingTwo}</span>
      </h1>
    </>
  );
}

export default Product;
