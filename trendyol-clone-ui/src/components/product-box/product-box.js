import './box.css';
import Box from "./box/box";

function ProductBox(props) {

    return(
        <div className="d-flex justify-content-center mt-4">
            <div style={{width: "1200px"}}>
                {props.products.map((item,index) => (
                    <div className="d-flex" style={{marginBottom: "25px"}} key={index}>
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