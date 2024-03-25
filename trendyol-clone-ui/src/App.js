import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/ProductPage/Product";
import Nav from "./pages/NavMenuPage/Nav";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/nav/:navName" element={<Nav />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
