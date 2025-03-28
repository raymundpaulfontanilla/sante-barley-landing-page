import Diabetes from "./diseases/Diabetes";
import KidneyFailure from "./diseases/KidneyFailure";
import Lupus from "./diseases/Lupus";
import PCOS from "./diseases/PCOS";

function YoutubeTestimonialVideo() {
  return (
    <div>
      <Diabetes link={"https://youtu.be/irh5TD_hJek"} />
      <KidneyFailure link={"https://youtu.be/DloCJeNx-eQ"} />
      <Lupus link={"https://youtu.be/3c7XRAy37pY"} />
      <PCOS link={"https://youtu.be/_aIn6tbQjoI"} />
    </div>
  );
}

export default YoutubeTestimonialVideo;
