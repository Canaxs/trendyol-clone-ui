import '../header.css';
import {useEffect, useState} from "react";
function HeaderBottom(props) {

    return (
            <div className={props.stickyBool ? "sticky-header" : "header-bottom d-flex align-items-center justify-content-between w-100"}>
                <div className="col-2">
                    <div className="logo">
                        <a href="/home"><img style={{width: "146px"}} src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="Trendyol" className="float-start" /> </a>
                    </div>
                </div>
                <div className="col-6 position-relative">
                    <div className="search">
                        <input type="text" placeholder="Aradığınız ürün, kategori veya markayı yazınız" style={{marginTop: props.stickyBool ? "7px" : "0" }}/>
                        <i className="bi bi-search"></i>
                    </div>
                </div>
                <div className="col-4">
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
