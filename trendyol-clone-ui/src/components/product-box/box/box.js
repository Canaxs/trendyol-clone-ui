import '../box.css';

function Box(props) {
    return(
        <div className="product-box">
            <a href="#">
                <img src={props.image}  alt="Product Box"/>
            </a>
        </div>
    )
}
export default Box;