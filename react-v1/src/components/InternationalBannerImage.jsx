import Image from "react-bootstrap/Image";

function InternationalBannerImage({ internationalImageBanner }) {
  return (
    <figure>
      <Image
        src={internationalImageBanner}
        alt="international headquarters"
        fluid
      />
    </figure>
  );
}

export default InternationalBannerImage;
