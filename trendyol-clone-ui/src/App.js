import './App.css';
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import Widget from "./components/widget/widget";
import SpecialProduct from "./components/special-product/special-product";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Widget />
      <SpecialProduct />
    </div>
  );
}

export default App;
