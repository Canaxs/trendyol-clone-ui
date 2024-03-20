import HeaderTop from "./header-top/header-top";
import './header.css';
import HeaderBottom from "./header-bottom/header-bottom";
import HeaderNavigation from "./navigation/header-navigation";

function Header(props) {
    return (
        <div className="header">
            <div className="header-main d-flex justify-content-center">
                <div className="wrapper" style={{width: "1200px"}}>
                    <HeaderTop />
                    <HeaderBottom stickyBool={props.stickyBool}/>
                </div>
            </div>
            <div className="header-navigate d-flex justify-content-center">
                <div className="wrapper" style={{width: "1200px"}}>
                    <HeaderNavigation />
                </div>
            </div>
        </div>
    );
}

export default Header;
