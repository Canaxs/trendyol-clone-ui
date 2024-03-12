import './box.css';
import Box from "./box/box";

function ProductBox(props) {

    return(
        <div className="d-flex justify-content-center mt-4">
            <div className="col-8">
                {props.products.map((item) => (
                    <div className="d-flex" style={{marginBottom: "25px"}}>
                        <Box
                            image={item.img1} />
                        <Box
                            image={item.img2} />
                        <Box
                            image={item.img3} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductBox;