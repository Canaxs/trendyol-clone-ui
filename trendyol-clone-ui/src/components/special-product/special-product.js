import './special.css';
import {useState} from "react";
import OwlCarousel from "react-owl-carousel";

function SpecialProduct(props) {

    return (
        <div className="slider-base d-flex justify-content-center">
            <div className="slider-widget col-8">
                <div className="slider-widget-title">
                  <span>{props.title}</span>
                </div>
                <OwlCarousel loop={false} items={5} dots={false} nav margin={10}
                             navText={['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>']}>
                    {props.items.map((item,index) => props.type === item.type ? (
                        <div className='slider-item' key={index}>
                            <div className="card">
                                <div className="d-flex justify-content-center">
                                    <img className="card-img-top" src={item.src} alt={item.title}/>
                                </div>
                                <div className="card-body">
                                    <span className="card-title text-start"><bold>{item.brand}</bold>
                                        {item.title}</span>
                                    <p className="card-text text-start"><span className="text-black">{item.point} <i
                                        className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
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
                    ) : ("")

                    )}
                </OwlCarousel>
            </div>
        </div>
    )
}

export default SpecialProduct;