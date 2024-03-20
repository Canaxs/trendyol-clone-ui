import '../product.css';
import OwlCarousel from "react-owl-carousel";

function ProductTop(props) {
    return(
        <div className="product-top d-flex justify-content-center">
            <div className="col-8 d-flex">
                <div className="col-4">
                    <div className="product-image-carousel">
                        <OwlCarousel loop={false} items={1} dots={false} nav margin={10}
                                     navText={['<i class="bi bi-arrow-left-circle"></i>', '<i class="bi bi-arrow-right-circle"></i>']}>
                            <div className="slider-product">
                                <img src={props.product.img1} alt="Trendyol Product Image"/>
                            </div>
                            <div className="slider-product">
                                <img src={props.product.img2} alt="Trendyol Product Image"/>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="product-images">
                        <div className="product-box-image">
                            <img src={props.product.img1} alt="Trendyol Product Image" />
                        </div>
                        <div className="product-box-image">
                            <img src={props.product.img2} alt="Trendyol Product Image"/>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="product-main">
                        <div className="product-top">
                            <p><span>{props.product.brand}</span> {props.product.title}</p>
                            <p>{props.product.point}
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <span className="evaluation">87663 Değerlendirme</span>
                                <span className="evaluation">2564 Soru & Cevap</span>
                            </p>
                            <span style={{fontSize: "22px",color: "#f27a1a",fontWeight: "500"}}>{props.product.price}</span>
                            <hr style={{opacity: "10%"}}/>
                        </div>
                        <div className="product-medium d-flex">
                            <button type="button" className="btn btn-lg btn-block product-basket">Sepete Ekle</button>
                            <div className="heart-circle">
                                <i className="bi bi-heart"></i>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <div className="cargo-text">
                                <p>9 saat 18 dakika içinde sipariş verirsen <span>en geç yarın</span> kargoda!</p>
                            </div>
                            <div className="product-coupon">
                                <p>Kuponlar</p>
                                <div className="coupon-box d-flex">
                                    <div className="coupon">
                                        <span>%10</span>
                                    </div>
                                    <div className="coupon">
                                        <span>%15</span>
                                    </div>
                                </div>
                            </div>
                            <div className="highlighted-features">
                                <p>Öne Çıkan Özellikler</p>
                                <ul>
                                    <li>Bu ürün Trendyol Mağaza tarafından gönderilecektir.</li>
                                    <li>Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.</li>
                                    <li>İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.</li>
                                    <li>Bir ürün, birden fazla satıcı tarafından satılabilir.
                                        Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata,
                                        satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve
                                        ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre
                                        sıralanmaktadır.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="shop-box">
                        <div className="shop-name">
                            <p>Trendyol Mağaza<span>9.2</span></p>
                            <span>533,4B Takipçi</span>
                        </div>
                        <div className="shop-details">
                            <div className="subscribe d-flex">
                                <div className="shop-details-box"></div>
                                <p className="mx-2">Takip Et Kazan</p>
                            </div>
                            <div className="questions d-flex">
                                <div className="shop-details-box"></div>
                                <p className="mx-2">Satıcı Soruları</p>
                            </div>
                        </div>
                    </div>
                    <div className="comment-box">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTop;