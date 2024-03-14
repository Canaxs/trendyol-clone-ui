import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Widget from "../../components/widget/widget";
import SpecialProduct from "../../components/special-product/special-product";
import ProductBox from "../../components/product-box/product-box";
import {useContext, useState} from "react";
import ProductTwoBox from "../../components/product-box/product2-box";
import {TrendyolContext} from "../../provider/TrendyolProvider";

function Home() {

    const { product, image} = useContext(TrendyolContext);

    const [productList , setProductList] = product;
    const [productImageList, setProductImageList] = image;


    const [productTwoBox,setProductTwoBox] = useState({
            img1: "https://cdn.dsmcdn.com/ty1188/pimWidgetApi/mobile_20240229152241_mobile20230906100645nike.jpg",
            img2: "https://cdn.dsmcdn.com/ty1093/pimWidgetApi/mobile_20231218065430_1234KadinMobile202312171401.jpg",
            img3: "https://cdn.dsmcdn.com/ty1187/pimWidgetApi/mobile_20240228204009_2443168KadinMobile20240227140.jpg"
        }
    );
    const [stickyBool, setStickyBool] = useState(false);

    const stickyBoolSet = (e) => {
        if(window.scrollY > 70) {
            setStickyBool(true)
        }
        else{
            setStickyBool(false);
        }
    }

    return (
        <div className="App" onWheel={(e) => stickyBoolSet(e)}>
            <Header stickyBool={stickyBool}/>
            <Slider />
            <Widget />
            <SpecialProduct title="Sana Özel Ürünler"  type="Special" items={productList}/>
            <ProductBox products={productImageList} />
            <SpecialProduct title="Çok Satan Ürünler"  type="Best" items={productList}/>
            <ProductTwoBox product={productTwoBox}/>
            <SpecialProduct title="Avantajlı Ürünler"  type="Best" items={productList}/>
            <ProductBox products={productImageList} />
        </div>
    );
}

export default Home;
