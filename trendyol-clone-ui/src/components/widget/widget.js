import './widget.css';

function Widget() {
    return(
        <div className="widget">
            <div className="widget-items" style={{width: "1200px"}}>
                <div className="widget-item">
                    <a href="#">
                        <span>Sepete En Çok Eklenenler</span>
                    </a>
                </div>
                <div className="widget-item">
                    <a href="#">
                        <span>En Çok Öne Çıkanlar</span>
                    </a>
                </div>
                <div className="widget-item">
                    <a href="#">
                        <span>Flaş Ürünler</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Widget;