import "../styles/international-sub-heading.css";

function TitleBanner({ heading, subHeading, className = "" }) {
  return (
    <section className="d-flex justify-content-center mt-3">
      <h1 className="fw-normal mt-2">
        {heading}
        <div className={`fw-semibold ms-2 ${className}`}>{subHeading}</div>
      </h1>
    </section>
  );
}

export default TitleBanner;
