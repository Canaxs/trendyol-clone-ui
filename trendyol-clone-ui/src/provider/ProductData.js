

const productData = [
    {
        id: 1,
        src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
        brand: "Bargello",
        title: " 122 Oriental Edp 50Ml Kadın Parfüm",
        point: "4.6",
        price: "290 TL",
        type: "Special",
        img1: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/19/401323368/61116150/3/3_org_zoom.jpg",
        img2: "https://cdn.dsmcdn.com/ty981/product/media/images/20230808/19/401323368/61116150/5/5_org_zoom.jpg",
        evaluation: "87663",
        questionAnswer: "2543"
    },
    {
        id: 2,
        src: "https://cdn.dsmcdn.com/ty833/product/media/images/20230417/12/326939382/60355429/2/2_org.jpg",
        brand: "Luis Bien",
        title: " Aşırı Yıpranmış Saçlara Özel",
        point: "4.5",
        price: "340 TL",
        type: "Special",
        img1: "https://cdn.dsmcdn.com/ty831/product/media/images/20230417/12/326939821/60355429/2/2_org_zoom.jpg",
        img2: "https://cdn.dsmcdn.com/ty833/product/media/images/20230417/12/326940377/60355429/2/2_org_zoom.jpg",
        evaluation: "87663",
        questionAnswer: "2543"
    },
    {
        id: 3,
        src: "https://cdn.dsmcdn.com/ty542/product/media/images/20220926/10/179892656/578786124/1/1_org.jpg",
        brand: "Siyah İnci",
        title: " Koyu Bordopamuklu Pijama Takım",
        point: "4.3",
        price: "289,99 TL",
        type: "Special",
        img1: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/19/401323368/61116150/3/3_org_zoom.jpg",
        img2: "https://cdn.dsmcdn.com/ty981/product/media/images/20230808/19/401323368/61116150/5/5_org_zoom.jpg",
        evaluation: "54325",
        questionAnswer: "3245"
    },
    {
        id: 4,
        src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
        brand: "Bargello",
        title: " 122 Oriental Edp 50Ml Kadın Parfüm",
        point: "4.6",
        price: "290 TL",
        type: "Special",
        img1: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/19/401323368/61116150/3/3_org_zoom.jpg",
        img2: "https://cdn.dsmcdn.com/ty981/product/media/images/20230808/19/401323368/61116150/5/5_org_zoom.jpg",
        evaluation: "96423",
        questionAnswer: "4521"
    },
    {
        id: 5,
        src: "https://cdn.dsmcdn.com/ty833/product/media/images/20230417/12/326939382/60355429/2/2_org.jpg",
        brand: "Luis Bien",
        title: " Aşırı Yıpranmış Saçlara Özel",
        point: "4.5",
        price: "340 TL",
        type: "Special",
        img1: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/19/401323368/61116150/3/3_org_zoom.jpg",
        img2: "https://cdn.dsmcdn.com/ty981/product/media/images/20230808/19/401323368/61116150/5/5_org_zoom.jpg",
        evaluation: "34567",
        questionAnswer: "4321"
    },
    {
        id: 6,
        src: "https://cdn.dsmcdn.com/ty542/product/media/images/20220926/10/179892656/578786124/1/1_org.jpg",
        brand: "Siyah İnci",
        title: " Koyu Bordopamuklu Pijama Takım",
        point: "4.3",
        price: "289,99 TL",
        type: "Special",
        img1: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/19/401323368/61116150/3/3_org_zoom.jpg",
        img2: "https://cdn.dsmcdn.com/ty981/product/media/images/20230808/19/401323368/61116150/5/5_org_zoom.jpg",
        evaluation: "34567",
        questionAnswer: "3212"
    },
    {
        id: 7,
        src: "https://cdn.dsmcdn.com/ty982/product/media/images/20230808/20/401324031/61116035/1/1_org.jpg",
        brand: "Bargello",
        title: " 122 Oriental Edp 50Ml Kadın Parfüm",
        point: "4.6",
        price: "290 TL",
        type: "Special"
    },
    {
        id: 8,
        src: "https://cdn.dsmcdn.com/ty833/product/media/images/20230417/12/326939382/60355429/2/2_org.jpg",
        brand: "Luis Bien",
        title: " Aşırı Yıpranmış Saçlara Özel",
        point: "4.5",
        price: "340 TL",
        type: "Special"
    },
    {
        id: 9,
        src: "https://cdn.dsmcdn.com/ty542/product/media/images/20220926/10/179892656/578786124/1/1_org.jpg",
        brand: "Siyah İnci",
        title: " Koyu Bordopamuklu Pijama Takım",
        point: "4.3",
        price: "289,99 TL",
        type: "Special"
    },
    {
        id: 10,
        src: "https://cdn.dsmcdn.com/ty1135/product/media/images/prod/SPM/PIM/20240115/01/56064c37-3356-31fd-93b7-2021c3290e45/1_org.jpg",
        brand: "Ritnice",
        title: " Line Kadın Likralı Cırt Kapama Siyah",
        point: "4.4",
        price: "469 TL",
        type: "Best"
    },
    {
        id: 11,
        src: "https://cdn.dsmcdn.com/ty1162/product/media/images/prod/SPM/PIM/20240207/04/461eb0db-c697-3981-9703-0dc19a0e8dfe/1_org.jpg",
        brand: "FV",
        title: " Palazzo Pantalon Oversize Orjinal Kesim",
        point: "4.4",
        price: "269 TL",
        type: "Best"
    },
    {
        id: 12,
        src: "https://cdn.dsmcdn.com/ty1159/product/media/images/prod/SPM/PIM/20240127/17/e1a110c1-a771-3c7d-b81e-eb6b56ea0c13/1_org.jpg",
        brand: "BGK",
        title: " 5'Li Sevimli Pamuk Kadın Patik",
        point: "4.2",
        price: "99,99 TL",
        type: "Best"
    },
    {
        id: 13,
        src: "https://cdn.dsmcdn.com/ty1135/product/media/images/prod/SPM/PIM/20240115/01/56064c37-3356-31fd-93b7-2021c3290e45/1_org.jpg",
        brand: "Ritnice",
        title: " Line Kadın Likralı Cırt Kapama Siyah",
        point: "4.4",
        price: "469 TL",
        type: "Best"
    },
    {
        id: 14,
        src: "https://cdn.dsmcdn.com/ty1162/product/media/images/prod/SPM/PIM/20240207/04/461eb0db-c697-3981-9703-0dc19a0e8dfe/1_org.jpg",
        brand: "FV",
        title: " Palazzo Pantalon Oversize Orjinal Kesim",
        point: "4.4",
        price: "269 TL",
        type: "Best"
    },
    {
        id: 15,
        src: "https://cdn.dsmcdn.com/ty1159/product/media/images/prod/SPM/PIM/20240127/17/e1a110c1-a771-3c7d-b81e-eb6b56ea0c13/1_org.jpg",
        brand: "BGK",
        title: " 5'Li Sevimli Pamuk Kadın Patik",
        point: "4.2",
        price: "99,99 TL",
        type: "Best"
    },
    {
        id: 16,
        src: "https://cdn.dsmcdn.com/ty1135/product/media/images/prod/SPM/PIM/20240115/01/56064c37-3356-31fd-93b7-2021c3290e45/1_org.jpg",
        brand: "Ritnice",
        title: " Line Kadın Likralı Cırt Kapama Siyah",
        point: "4.4",
        price: "469 TL",
        type: "Best"
    },
    {
        id: 17,
        src: "https://cdn.dsmcdn.com/ty1162/product/media/images/prod/SPM/PIM/20240207/04/461eb0db-c697-3981-9703-0dc19a0e8dfe/1_org.jpg",
        brand: "FV",
        title: " Palazzo Pantalon Oversize Orjinal Kesim",
        point: "4.4",
        price: "269 TL",
        type: "Best"
    },
    {
        id: 18,
        src: "https://cdn.dsmcdn.com/ty1159/product/media/images/prod/SPM/PIM/20240127/17/e1a110c1-a771-3c7d-b81e-eb6b56ea0c13/1_org.jpg",
        brand: "BGK",
        title: " 5'Li Sevimli Pamuk Kadın Patik",
        point: "4.2",
        price: "99,99 TL",
        type: "Best"
    },
];

export default productData;