import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/pages/Product";
import Branch from "./components/pages/Branch";
import Layout from "./components/Layout";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/branches" element={<Branch />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
