import './special.css';
import {useState} from "react";
import OwlCarousel from "react-owl-carousel";

function SpecialProduct() {

    const [items,setItems] = useState([{
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental",
            point: "4.6",
            price: "290 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental",
            point: "4.6",
            price: "290 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental",
            point: "4.6",
            price: "290 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental",
            point: "4.6",
            price: "290 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental",
            point: "4.6",
            price: "290 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental",
            point: "4.6",
            price: "290 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental",
            point: "4.6",
            price: "290 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental",
            point: "4.6",
            price: "290 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental",
            point: "4.6",
            price: "290 TL"
        },
    ]);


    return (
        <div className="slider-base d-flex justify-content-center">
            <div className="slider-widget col-8">
                <div className="slider-widget-title">
                  <span>Sana Özel Ürünler</span>
                </div>
                <OwlCarousel loop={false} items={5} dots={false} nav margin={10}
                             navText={['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>']}>
                    {items.map((item,index) => (
                        <div className='slider-item'>
                            <div className="card">
                                <div className="d-flex justify-content-center">
                                    <img className="card-img-top" src={item.src} alt={item.title}/>
                                </div>
                                <div className="card-body">
                                    <span className="card-title text-start"><bold>{item.brand}</bold>
                                        {item.title}</span>
                                    <p className="card-text text-start"><span className="text-black">{item.point}</span>
                                        <br/> <br/>{item.price}</p>
                                    <div className="d-flex">
                                        <div className="promotion">
                                            <i className="bi bi-award-fill"></i>
                                            <span>Kupon Fırsatı</span>
                                        </div>
                                        {index % 2 === 0 ? <div className="promotion text-bg-light ms-1">
                                            <i className="bi bi-bookmark-plus-fill text-warning"></i>
                                            <span>3 Al 2 Öde</span>
                                        </div> : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default SpecialProduct;