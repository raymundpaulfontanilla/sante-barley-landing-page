import ImageBanner from "./ImageBanner";
import TitleBanner from "./TitleBanner";
import philippineHeadquarters from "../assets/images/ph_headquarters.png";

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
    </header>
  );
}
export default MobileBanner;
