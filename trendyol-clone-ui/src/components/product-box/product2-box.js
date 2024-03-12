import './box.css';
import Box from "./box/box";

function ProductTwoBox(props) {
    return(
        <div className="d-flex justify-content-center mt-4">
            <div className="col-8">
                <div className="d-flex" style={{marginBottom: "25px"}}>
                    <Box
                        image={props.product.img1} />
                    <Box
                        image={props.product.img2} />
                    <Box
                        image={props.product.img3} />
                </div>
            </div>
        </div>
    )
}

export default ProductTwoBox;