import {useNavigate, useParams} from "react-router-dom";
import Header from "../../components/header/header";
import {useContext, useEffect, useState} from "react";
import categoryName from "./CategoryName";
import NotFound from "../NotFound/NotFound";
import NavComponent from "../../components/nav-component/nav-component";
import {TrendyolContext} from "../../provider/TrendyolProvider";


function Nav() {

    const { product, image} = useContext(TrendyolContext);

    const [productList , setProductList] = product;
    const [productImageList, setProductImageList] = image;

    const [stickyBool, setStickyBool] = useState(false);
    const navigate = useNavigate();


    const { navName } = useParams();

    useEffect( () => {
        if(!categoryName.includes(navName)) {
            navigate("/not-found");
        }
    }, [])

    const stickyBoolSet = (e) => {
        if(window.scrollY > 70) {
            setStickyBool(true)
        }
        else{
            setStickyBool(false);
        }
    }




    return(
        <div onWheel={(e) => stickyBoolSet(e)}>
            <Header stickyBool={stickyBool} />
            <NavComponent navItems={productList.filter(product => product.category.toUpperCase() === navName.toUpperCase())}/>
        </div>
    )
}
export default Nav;