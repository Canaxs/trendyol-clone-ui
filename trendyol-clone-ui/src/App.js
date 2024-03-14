import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/ProductPage/Product";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
