import GlobalOffices from "./components/GlobalOffices";
import MobileBanner from "./components/MobileBanner";
import NavigationBar from "./components/NavigationBar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <NavigationBar />
      <MobileBanner />
      <GlobalOffices />
      <Testimonials />
    </div>
  );
}

export default App;
