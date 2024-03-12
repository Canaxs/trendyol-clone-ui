import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
      <Router location={""} navigator={""}>
        <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="*" element={<Home/>} />
        </Routes>
      </Router>
  );
}

export default App;
