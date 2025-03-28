import TitleBanner from "./headings/TitleBanner";
import PhilippineImage from "./banners/PhilippineImage";
import philippineHeadquarters from "../assets/images/ph_headquarters.png";
import InternationalBannerImage from "./banners/InternationalImage";
import internationalHeadquarters from "../assets/images/international_headquarters.png";

function MobileBanner() {
  return (
    <header>
      <TitleBanner heading={"SANTÉ PHILIPPINE"} subHeading={" HEADQUARTERS"} />
      <PhilippineImage philippineImageBanner={philippineHeadquarters} />
      <TitleBanner
        heading={"SANTÉ INTERNATIONAL"}
        subHeading={" HEADQUARTERS"}
        className="international-sub-heading"
      />
      <InternationalBannerImage
        internationalImageBanner={internationalHeadquarters}
      />
    </header>
  );
}
export default MobileBanner;
