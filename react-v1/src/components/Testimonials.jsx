import EstablishedDate from "./EstablishedDate";
import TestimonialsHeading from "./TestimonialsHeading";
import YoutubeTestimonialsVideos from "./YoutubeTestimonialsVideos";

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
    </div>
  );
}

export default Testimonials;
