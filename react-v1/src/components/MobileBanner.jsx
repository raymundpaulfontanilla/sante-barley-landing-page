import TitleBanner from "./TitleBanner";
import ImageBanner from "./ImageBanner";
import philippineHeadquarters from "../assets/images/ph_headquarters.png";
import InternationalBannerImage from "./InternationalBannerImage";
import internationalHeadquarters from "../assets/images/international_headquarters.png";

function MobileBanner() {
  return (
    <header>
      <TitleBanner heading={"SANTÉ PHILIPPINE"} subHeading={" HEADQUARTERS"} />
      <ImageBanner philippineImageBanner={philippineHeadquarters} />
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
