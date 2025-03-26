import NavigationBar from "./components/NavigationBar";
import MobileBanner from "./components/MobileBanner";
import GlobalOffices from "./components/GlobalOffices";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <MobileBanner />
      <GlobalOffices />
      <Testimonials />
      <Footer footer={"© 2025 Santé Philippines | All Rights Reserved"} />
    </div>
  );
}

export default App;
