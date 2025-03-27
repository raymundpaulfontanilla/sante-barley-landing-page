import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/pages/Product";
import Branch from "./components/pages/Branch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/branches" element={<Branch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
