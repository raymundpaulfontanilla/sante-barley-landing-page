function EstablishedDate({
  italicEstablishedDate,
  establishedDate,
  boldEstablishedDate,
  endingEstablishedDate,
}) {
  return (
    <div>
      <p className="fs-5 ms-3">
        <span className="fst-italic">{`${italicEstablishedDate} ${"\u00A0"}`}</span>
        {`${establishedDate}${"\u00A0"}`}
        <span className="fw-bold">{`${boldEstablishedDate} ${"\u00A0"}`}</span>
        <span>{endingEstablishedDate}</span>
      </p>
    </div>
  );
}

export default EstablishedDate;
