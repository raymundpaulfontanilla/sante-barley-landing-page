function TitleBanner({ heading, subHeading }) {
  return (
    <section className="d-flex justify-content-center mt-3">
      <h1 className="fw-normal">
        {heading}
        <div className="fw-semibold">{subHeading}</div>
      </h1>
    </section>
  );
}

export default TitleBanner;
