import Image from "react-bootstrap/Image";

function PhilippinesBannerImage({ philippineImageBanner }) {
  return (
    <figure>
      <Image src={philippineImageBanner} alt="philippine headquarters" fluid />
    </figure>
  );
}

export default PhilippinesBannerImage;
