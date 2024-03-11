import './slider.css';
import OwlCarousel from "react-owl-carousel";
import {useState} from "react";


function Slider() {

    const [items,setItems] = useState([{
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/En_Cok_Satanlar_202302142041.png",
            alt: "Trendyol",
            span: "Sen De Al!"
        },
        {
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/Senin_Icin_Sectik_202302142041.png",
            alt: "Trendyol",
            span: "Sana Özel"
        },
        {
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/7/20/Widget_202307201111.png",
            alt: "Trendyol",
            span: "Kurumsal"
        },
        {
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/7/26/Widget_202307261451.png",
            alt: "Trendyol",
            span: "Kredi Kartı"
        },
        {
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/8/22/Kredilercircle_202308221603.png",
            alt: "Trendyol",
            span: "Krediler"
        },
        {
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Apple_202301262111.jpg",
            alt: "Trendyol",
            span: "Apple"
        },
        {
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Philips_202301271558.jpg",
            alt: "Trendyol",
            span: "Philips"
        },
        {
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg",
            alt: "Trendyol",
            span: "Pull & Bear"
        },
        {
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg",
            alt: "Trendyol",
            span: "Xiaomi"
        },
        {
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Samsung_202301271715.jpg",
            alt: "Trendyol",
            span: "Samsung"
        },
        {
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Sony_202301271715.jpg",
            alt: "Trendyol",
            span: "Sony"
        },
        {
            src: "https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg",
            alt: "Trendyol",
            span: "Puma"
        },
    ]);

    return(
        <div className="slider-base d-flex justify-content-center">
            <div className="col-8">
            <OwlCarousel loop={false} items={10} nav margin={10} navText={['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>']}>
                    {items.map(item => (
                        <div className='item'>
                            <a href="#">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                />
                                <span>{item.span}</span>
                            </a>
                        </div>
                            ))}
                        </OwlCarousel>
            </div>
        </div>
    )
}

export default Slider;