import GlobalOfficeFlag from "./GlobalOfficeFlag";
import GlobalOfficeTitle from "./headings/GlobalOffice";

function GlobalOffices() {
  return (
    <>
      <GlobalOfficeTitle
        mainTitle={"Santé"}
        spanTitle={"Global"}
        endTitle={"Offices"}
      />
      <GlobalOfficeFlag />
    </>
  );
}

export default GlobalOffices;
