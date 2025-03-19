import GlobalOfficesFlags from "./GlobalOfficesFlags";
import GlobalOfficeTitle from "./GlobalOfficeTitle";

function GlobalOffices() {
  return (
    <>
      <GlobalOfficeTitle
        mainTitle={"Santé"}
        spanTitle={"Global"}
        endTitle={"Offices"}
      />
      <GlobalOfficesFlags />
    </>
  );
}

export default GlobalOffices;
