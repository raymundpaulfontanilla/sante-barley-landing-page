import NavigationBar from "../NavigationBar";
import MobileBanner from "../MobileBanner";
import GlobalOffices from "../GlobalOffices";
import Testimonials from "../Testimonials";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <NavigationBar />
      <MobileBanner />
      <GlobalOffices />
      <Testimonials />
      <Footer footer={"© 2025 Santé Philippines | All Rights Reserved"} />
    </>
  );
}

export default Home;
