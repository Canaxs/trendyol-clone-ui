import '../header.css';
function HeaderBottom() {
    return (
        <div className="header-bottom d-flex align-items-center justify-content-between w-100 position-relative">
            <div className="col-3">
                <div className="logo">
                    <img style={{width: "146px"}} src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="Trendyol" className="float-start" />
                </div>
            </div>
            <div className="col-6 position-relative">
                <div className="search">
                    <input type="text" placeholder="Aradığınız ürün, kategori veya markayı yazınız" />
                    <i className="bi bi-search"></i>
                </div>
            </div>
            <div className="col-3">
                <div className="account-panel-container float-end">
                    <div className="account-wrapper d-flex justify-content-between flex-row">
                        <div className="account-user m-lg-3">
                            <a href="#" className="account-nav-link">
                                <i className="bi bi-person account-icon"></i>
                                <span>Giriş Yap</span>
                            </a>
                        </div>
                        <div className="account-favorites m-lg-3">
                            <a href="#" className="account-nav-link">
                                <i className="bi bi-heart account-icon"></i>
                                <span>Favorilerim</span>
                            </a>
                        </div>
                        <div className="account-basket m-lg-3">
                            <a href="#" className="account-nav-link">
                                <i className="bi bi-cart3 account-icon"></i>
                                <span>Sepetim</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;
