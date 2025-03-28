import Image from "react-bootstrap/Image";

function PhilippineImage({ philippineImageBanner }) {
  return (
    <figure>
      <Image src={philippineImageBanner} alt="philippine headquarters" fluid />
    </figure>
  );
}

export default PhilippineImage;
