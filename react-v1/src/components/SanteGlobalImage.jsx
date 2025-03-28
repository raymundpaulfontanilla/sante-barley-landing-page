import SanteBarleyGlobe from "../assets/images/sante-barley-globe.png";
import Image from "react-bootstrap/Image";

function SanteGlobalImage() {
  return (
    <figure>
      <Image src={SanteBarleyGlobe} alt="Sante Barley Globe" fluid />
    </figure>
  );
}

export default SanteGlobalImage;
