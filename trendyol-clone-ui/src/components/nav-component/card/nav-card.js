import {useNavigate} from "react-router-dom";


function NavCard(props) {

    let navigate = useNavigate();

    let redirectPage = (id) => {
        navigate("/product/"+id);
    }

    return (
        <div className="card m-2" onClick={() => redirectPage(props.navItem.id)}>
            <div className="d-flex justify-content-center w-100">
                <img className="card-img-top" src={props.navItem.img1} alt={props.navItem.title}/>
            </div>
            <div className="card-body w-100">
                                    <span className="card-title text-start w-100"><bold>{props.navItem.brand}</bold>
                                        {props.navItem.title}</span>
                <p className="card-text text-start w-100"><span className="text-black">{props.navItem.point} <i
                    className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                    <br/> <br/> {props.navItem.price}</p>
                <div className="d-flex">
                    <div className="promotion">
                        <i className="bi bi-award-fill"></i>
                        <span>Kupon Fırsatı</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavCard;