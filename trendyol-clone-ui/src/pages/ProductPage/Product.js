import ProductTop from "../../components/product/product-top/product-top";
import {useParams} from "react-router-dom";
import {useContext, useState} from "react";
import {TrendyolContext} from "../../provider/TrendyolProvider";
import Header from "../../components/header/header";


function Product() {

    const { product , image} = useContext(TrendyolContext);

    const [productList , setProductList] = product;

    const { productId } = useParams();

    const [stickyBool, setStickyBool] = useState(false);

    const stickyBoolSet = (e) => {
        if(window.scrollY > 70) {
            setStickyBool(true)
        }
        else{
            setStickyBool(false);
        }
    }


    return(
        <div>
            <Header stickyBool={stickyBool} />
            <ProductTop product={productList[productId-1]} />
        </div>
    )
}
export default Product;