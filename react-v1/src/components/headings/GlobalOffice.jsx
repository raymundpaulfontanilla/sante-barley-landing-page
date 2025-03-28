function GlobalOffice({ mainTitle, spanTitle, endTitle }) {
  return (
    <section>
      <h1 className="d-flex justify-content-center mb-3">
        {mainTitle}
        {"\u00A0"}
        <span className="fw-bold">{spanTitle}</span>
        {"\u00A0"}
        {endTitle}
      </h1>
    </section>
  );
}

export default GlobalOffice;
