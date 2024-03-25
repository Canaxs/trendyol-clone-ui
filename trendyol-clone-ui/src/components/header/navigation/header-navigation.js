import '../header.css';
import {useState} from "react";

function HeaderNavigation() {
    const [dropdown,setDropdown] = useState(false);

    const handleDrop = () => {
        setDropdown(!dropdown);
    }

    return (
        <div className="header-navigation d-flex position-relative align-items-center mt-lg-2">
            <div className="side-menu col-2">
                <div className="side-menu-button d-flex justify-content-center align-items-center float-start"
                     onMouseEnter={handleDrop}>
                    <i className="bi bi-list"></i>
                    <p>TÜM KATEGORİLER</p>
                </div>
                <div className="side-categories" style={{display: dropdown ? 'block' : 'none'}} onMouseLeave={handleDrop}>
                    <div className="dropdown-category d-flex">
                        <div className="col-3 d-flex flex-column h-100">
                            <div className="left-side">
                                <div className="items justify-content-start">
                                    <i className="bi bi-person-standing-dress"></i>
                                    <span>Kadın</span>
                                </div>
                            </div>
                            <div className="left-side">
                                <div className="items">
                                    <i className="bi bi-person-standing"></i>
                                    <span>Erkek</span>
                                </div>
                            </div>
                            <div className="left-side">
                                <div className="items">
                                    <i className="bi bi-person-arms-up"></i>
                                    <span>Anne & Çocuk</span>
                                </div>
                            </div>
                            <div className="left-side">
                                <div className="items">
                                    <i className="bi bi-house-door"></i>
                                    <span>Ev & Yaşam</span>
                                </div>
                            </div>
                            <div className="left-side">
                                <div className="items">
                                    <i className="bi bi-shop"></i>
                                    <span>Süpermarket</span>
                                </div>
                            </div>
                            <div className="left-side">
                                <div className="items">
                                    <i className="bi bi-person-standing-dress"></i>
                                    <span>Kozmetik</span>
                                </div>
                            </div>
                            <div className="left-side">
                                <div className="items">
                                    <i className="bi bi-duffle-fill"></i>
                                    <span>Ayakkabı & Çanta</span>
                                </div>
                            </div>
                            <div className="left-side">
                                <div className="items">
                                    <i className="bi bi-playstation"></i>
                                    <span>Elektronik</span>
                                </div>
                            </div>
                            <div className="left-side">
                                <div className="items">
                                    <i className="bi bi-globe"></i>
                                    <span>Spor & OutDoor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-9 d-flex justify-content-between m-1 text-start">
                            <div className="right-side">
                                <div className="slide-title"><span>Giyim</span></div>
                                <p>Giyim 1</p>
                                <p>Giyim 2</p>
                                <p>Giyim 3</p>
                                <p>Giyim 4</p>
                                <p>Giyim 5</p>
                                <p>Giyim 6</p>
                            </div>
                            <div className="right-side">
                                <div className="slide-title"><span>Ayakkabı</span></div>
                                <p>Ayakkabı 1</p>
                                <p>Ayakkabı 2</p>
                                <p>Ayakkabı 3</p>
                                <p>Ayakkabı 4</p>
                                <p>Ayakkabı 5</p>
                                <p>Ayakkabı 6</p>
                            </div>
                            <div className="right-side">
                                <div className="slide-title"><span>Çanta</span></div>
                                <p>Çanta 1</p>
                                <p>Çanta 2</p>
                                <p>Çanta 3</p>
                                <p>Çanta 4</p>
                                <p>Çanta 5</p>
                                <p>Çanta 6</p>
                            </div>
                            <div className="right-side">
                                <div className="slide-title"><span>İç Giyim</span></div>
                                <p>İç Giyim 1</p>
                                <p>İç Giyim 2</p>
                                <p>İç Giyim 3</p>
                                <p>İç Giyim 4</p>
                                <p>İç Giyim 5</p>
                                <p>İç Giyim 6</p>
                            </div>
                            <div className="right-side">
                                <div className="slide-title"><span>Kozmetik</span></div>
                                <p>Kozmetik 1</p>
                                <p>Kozmetik 2</p>
                                <p>Kozmetik 3</p>
                                <p>Kozmetik 4</p>
                                <p>Kozmetik 5</p>
                                <p>Kozmetik 6</p>
                            </div>
                            <div className="right-side">
                                <div className="slide-title"><span>Spor & Outdoor</span></div>
                                <p>Spor 1</p>
                                <p>Spor 2</p>
                                <p>Spor 3</p>
                                <p>Spor 4</p>
                                <p>Spor 5</p>
                                <p>Spor 6</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li><a href="/nav/kadın">Kadın</a></li>
                    <li><a href="/nav/erkek">Erkek</a></li>
                    <li><a href="/nav/anne-cocuk">Anne & Çocuk</a></li>
                    <li><a href="/nav/ev-yasam">Ev & Yaşam</a></li>
                    <li><a href="/nav/supermarket">Süpermarket</a></li>
                    <li><a href="/nav/kozmetik">Kozmetik</a></li>
                    <li><a href="/nav/ayakkabı-canta">Ayakkabı & Çanta</a></li>
                    <li><a href="/nav/elektronik">Elektronik</a></li>
                    <li><a href="/nav/cok-satanlar">Çok Satanlar <span className="new-badge">Yeni</span></a></li>
                    <li><a href="/nav/flas-urunler">Flaş Ürünler <span className="new-badge">Yeni</span></a></li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderNavigation;
