import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Widget from "../../components/widget/widget";
import SpecialProduct from "../../components/special-product/special-product";
import ProductBox from "../../components/product-box/product-box";
import {useState} from "react";
import ProductTwoBox from "../../components/product-box/product2-box";

function Home() {

    const [specialItems,setSpecialItems] = useState([{
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental Edp 50Ml Kadın Parfüm",
            point: "4.6",
            price: "290 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty833/product/media/images/20230417/12/326939382/60355429/2/2_org.jpg",
            brand: "Luis Bien",
            title: " Aşırı Yıpranmış Saçlara Özel",
            point: "4.5",
            price: "340 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty542/product/media/images/20220926/10/179892656/578786124/1/1_org.jpg",
            brand: "Siyah İnci",
            title: " Koyu Bordopamuklu Pijama Takım",
            point: "4.3",
            price: "289,99 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental Edp 50Ml Kadın Parfüm",
            point: "4.6",
            price: "290 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty833/product/media/images/20230417/12/326939382/60355429/2/2_org.jpg",
            brand: "Luis Bien",
            title: " Aşırı Yıpranmış Saçlara Özel",
            point: "4.5",
            price: "340 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty542/product/media/images/20220926/10/179892656/578786124/1/1_org.jpg",
            brand: "Siyah İnci",
            title: " Koyu Bordopamuklu Pijama Takım",
            point: "4.3",
            price: "289,99 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
            brand: "Bargello",
            title: " 122 Oriental Edp 50Ml Kadın Parfüm",
            point: "4.6",
            price: "290 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty833/product/media/images/20230417/12/326939382/60355429/2/2_org.jpg",
            brand: "Luis Bien",
            title: " Aşırı Yıpranmış Saçlara Özel",
            point: "4.5",
            price: "340 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty542/product/media/images/20220926/10/179892656/578786124/1/1_org.jpg",
            brand: "Siyah İnci",
            title: " Koyu Bordopamuklu Pijama Takım",
            point: "4.3",
            price: "289,99 TL"
        },
    ]);

    const [bestItems,setBestItems] = useState([{
            src: "https://cdn.dsmcdn.com/ty1135/product/media/images/prod/SPM/PIM/20240115/01/56064c37-3356-31fd-93b7-2021c3290e45/1_org.jpg",
            brand: "Ritnice",
            title: " Line Kadın Likralı Cırt Kapama Siyah",
            point: "4.4",
            price: "469 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty1162/product/media/images/prod/SPM/PIM/20240207/04/461eb0db-c697-3981-9703-0dc19a0e8dfe/1_org.jpg",
            brand: "FV",
            title: " Palazzo Pantalon Oversize Orjinal Kesim",
            point: "4.4",
            price: "269 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty1159/product/media/images/prod/SPM/PIM/20240127/17/e1a110c1-a771-3c7d-b81e-eb6b56ea0c13/1_org.jpg",
            brand: "BGK",
            title: " 5'Li Sevimli Pamuk Kadın Patik",
            point: "4.2",
            price: "99,99 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty1135/product/media/images/prod/SPM/PIM/20240115/01/56064c37-3356-31fd-93b7-2021c3290e45/1_org.jpg",
            brand: "Ritnice",
            title: " Line Kadın Likralı Cırt Kapama Siyah",
            point: "4.4",
            price: "469 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty1162/product/media/images/prod/SPM/PIM/20240207/04/461eb0db-c697-3981-9703-0dc19a0e8dfe/1_org.jpg",
            brand: "FV",
            title: " Palazzo Pantalon Oversize Orjinal Kesim",
            point: "4.4",
            price: "269 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty1159/product/media/images/prod/SPM/PIM/20240127/17/e1a110c1-a771-3c7d-b81e-eb6b56ea0c13/1_org.jpg",
            brand: "BGK",
            title: " 5'Li Sevimli Pamuk Kadın Patik",
            point: "4.2",
            price: "99,99 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty1135/product/media/images/prod/SPM/PIM/20240115/01/56064c37-3356-31fd-93b7-2021c3290e45/1_org.jpg",
            brand: "Ritnice",
            title: " Line Kadın Likralı Cırt Kapama Siyah",
            point: "4.4",
            price: "469 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty1162/product/media/images/prod/SPM/PIM/20240207/04/461eb0db-c697-3981-9703-0dc19a0e8dfe/1_org.jpg",
            brand: "FV",
            title: " Palazzo Pantalon Oversize Orjinal Kesim",
            point: "4.4",
            price: "269 TL"
        },
        {
            src: "https://cdn.dsmcdn.com/ty1159/product/media/images/prod/SPM/PIM/20240127/17/e1a110c1-a771-3c7d-b81e-eb6b56ea0c13/1_org.jpg",
            brand: "BGK",
            title: " 5'Li Sevimli Pamuk Kadın Patik",
            point: "4.2",
            price: "99,99 TL"
        },
    ]);

    const [productBox,setProductBox] = useState([{
            img1: "https://cdn.dsmcdn.com/ty1192/pimWidgetApi/mobile_20240302064954_mobile202311141354362353557AyakkabiCantaMobile202311032101.jpg",
            img2: "https://cdn.dsmcdn.com/ty1204/pimWidgetApi/mobile_20240312100816_KucukEvAletleriSon30GununEnDusukFiyatlariElektronikGunleri2666604mobile.jpg",
            img3: "https://cdn.dsmcdn.com/ty1205/pimWidgetApi/mobile_20240312100728_KucukEvAletleriAvantajliUrunlerElektronikGunleri2666592mobile.jpg"
        },
        {
            img1: "https://cdn.dsmcdn.com/ty1192/pimWidgetApi/mobile_20240302064954_mobile202311141354362353557AyakkabiCantaMobile202311032101.jpg",
            img2: "https://cdn.dsmcdn.com/ty1204/pimWidgetApi/mobile_20240312100816_KucukEvAletleriSon30GununEnDusukFiyatlariElektronikGunleri2666604mobile.jpg",
            img3: "https://cdn.dsmcdn.com/ty1205/pimWidgetApi/mobile_20240312100728_KucukEvAletleriAvantajliUrunlerElektronikGunleri2666592mobile.jpg"
        },
        {
            img1: "https://cdn.dsmcdn.com/ty1192/pimWidgetApi/mobile_20240302064954_mobile202311141354362353557AyakkabiCantaMobile202311032101.jpg",
            img2: "https://cdn.dsmcdn.com/ty1204/pimWidgetApi/mobile_20240312100816_KucukEvAletleriSon30GununEnDusukFiyatlariElektronikGunleri2666604mobile.jpg",
            img3: "https://cdn.dsmcdn.com/ty1205/pimWidgetApi/mobile_20240312100728_KucukEvAletleriAvantajliUrunlerElektronikGunleri2666592mobile.jpg"
        }
        ]);
    const [productTwoBox,setProductTwoBox] = useState({
            img1: "https://cdn.dsmcdn.com/ty1188/pimWidgetApi/mobile_20240229152241_mobile20230906100645nike.jpg",
            img2: "https://cdn.dsmcdn.com/ty1093/pimWidgetApi/mobile_20231218065430_1234KadinMobile202312171401.jpg",
            img3: "https://cdn.dsmcdn.com/ty1187/pimWidgetApi/mobile_20240228204009_2443168KadinMobile20240227140.jpg"
        }
    );
    const [stickyBool, setStickyBool] = useState(false);

    const stickyBoolSet = (e) => {
        if(window.scrollY > 70) {
            setStickyBool(true)
        }
        else{
            setStickyBool(false);
        }
    }

    return (
        <div className="App" onWheel={(e) => stickyBoolSet(e)}>
            <Header stickyBool={stickyBool}/>
            <Slider />
            <Widget />
            <SpecialProduct title="Sana Özel Ürünler" items={specialItems}/>
            <ProductBox products={productBox} />
            <SpecialProduct title="Çok Satan Ürünler" items={bestItems}/>
            <ProductTwoBox product={productTwoBox}/>
            <SpecialProduct title="Avantajlı Ürünler" items={bestItems}/>
            <ProductBox products={productBox} />
        </div>
    );
}

export default Home;
