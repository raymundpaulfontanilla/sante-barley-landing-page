import Image from "react-bootstrap/Image";

function ImageBanner({ philippineImageBanner }) {
  return (
    <figure>
      <Image src={philippineImageBanner} alt="philippine headquarters" fluid />
    </figure>
  );
}

export default ImageBanner;
