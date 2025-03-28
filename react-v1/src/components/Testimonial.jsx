import EstablishDate from "./EstablishDate";
import TestimonialHeading from "./headings/Testimonial";
import YoutubeTestimonialVideo from "./YoutubeTestimonialVideo";
import Image from "react-bootstrap/Image";
import SanteCertifications from "../assets/images/sante-barley-certifications.png";

function Testimonial() {
  return (
    <div>
      <TestimonialHeading testiMonials={"Testimonials"} />
      <EstablishDate
        italicEstablishedDate={"Since our inception in 2007"}
        establishedDate={
          "as a direct selling company, we have consistently evolved"
        }
        boldEstablishedDate={"expanding our global presence,"}
        endingEstablishedDate={
          "enhancing our WELLNESS PRODUCTS, and earning widespread recognition and positive testimonials."
        }
      />
      <YoutubeTestimonialVideo />
      <Image
        src={SanteCertifications}
        alt="sante certifications"
        fluid
        className="mt-3 mb-3"
      />
    </div>
  );
}

export default Testimonial;
