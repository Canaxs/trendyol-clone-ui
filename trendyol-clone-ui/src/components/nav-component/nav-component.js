import './nav.css';
import NavCard from "./card/nav-card";



function NavComponent(props) {

    return (
        <div className="nav-base d-flex justify-content-center">
            <div className="nav-section d-flex">
                <div className="nav-filtering col-2">

                </div>
                <div className="nav-boxes col-10" style={{marginLeft: "20px"}}>
                    <div className="box-item d-flex">
                        {props.navItems.map((item,index) => <NavCard navItem={item} />) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavComponent;