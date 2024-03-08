import HeaderTop from "./header-top/header-top";
import './header.css';
import HeaderBottom from "./header-bottom/header-bottom";

function Header() {
    return (
        <div className="header">
            <div className="header-main d-flex justify-content-center">
                <div className="wrapper col-8">
                    <HeaderTop />
                    <HeaderBottom />
                </div>
            </div>
            <div className="header-navigation">

            </div>
        </div>
    );
}

export default Header;
