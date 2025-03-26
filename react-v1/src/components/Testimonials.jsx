import EstablishedDate from "./EstablishedDate";
import TestimonialsHeading from "./TestimonialsHeading";
import YoutubeTestimonialsVideos from "./YoutubeTestimonialsVideos";
import Image from "react-bootstrap/Image";
import SanteCertifications from "../assets/images/sante-barley-certifications.png";

function Testimonials() {
  return (
    <div>
      <TestimonialsHeading testiMonials={"Testimonials"} />
      <EstablishedDate
        italicEstablishedDate={"Since our inception in 2007"}
        establishedDate={
          "as a direct selling company, we have consistently evolved"
        }
        boldEstablishedDate={"expanding our global presence,"}
        endingEstablishedDate={
          "enhancing our WELLNESS PRODUCTS, and earning widespread recognition and positive testimonials."
        }
      />
      <YoutubeTestimonialsVideos />
      <Image
        src={SanteCertifications}
        alt="sante certifications"
        fluid
        className="mt-3 mb-3"
      />
    </div>
  );
}

export default Testimonials;
