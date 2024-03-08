import '../header.css';
function HeaderBottom() {
    return (
        <div className="header-bottom d-flex align-items-center justify-content-between w-100 position-relative">
            <div className="header-col">
                <div className="logo">
                    <img style={{width: "146px"}} src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="Trendyol" />
                </div>
            </div>
            <div className="header-col w-50">
                <div className="search">
                    <input type="text" placeholder="Aradığınız ürün, kategori veya markayı yazınız" />
                    <i className="bi bi-search"></i>
                </div>
            </div>
            <div className="header-col">
                <div className="account-panel-container">
                    <div className="account-wrapper d-flex justify-content-between flex-row">
                        <div className="account-user">

                        </div>
                        <div className="account-favorites">

                        </div>
                        <div className="account-basket">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;
