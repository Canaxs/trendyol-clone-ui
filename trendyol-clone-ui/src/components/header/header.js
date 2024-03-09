import HeaderTop from "./header-top/header-top";
import './header.css';
import HeaderBottom from "./header-bottom/header-bottom";
import HeaderNavigation from "./navigation/header-navigation";

function Header() {
    return (
        <div className="header">
            <div className="header-main d-flex justify-content-center">
                <div className="wrapper col-8">
                    <HeaderTop />
                    <HeaderBottom />
                </div>
            </div>
            <div className="header-navigate d-flex justify-content-center">
                <div className="wrapper col-8">
                    <HeaderNavigation />
                </div>
            </div>
        </div>
    );
}

export default Header;
