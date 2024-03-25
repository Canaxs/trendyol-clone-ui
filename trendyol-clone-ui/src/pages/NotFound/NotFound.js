import Header from "../../components/header/header";
import {useState} from "react";


function NotFound() {

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
        <div onWheel={(e) => stickyBoolSet(e)}>
            <Header stickyBool={stickyBool} />
            <div className="not-found text-center my-5">
                <h1 style={{fontWeight: "500"}}>Böyle bir sayfa bulunmuyor.</h1>
            </div>
        </div>
    )
}
export default NotFound;