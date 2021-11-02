import { NavLink } from "react-router-dom"
import "./Item.css"

const Item = ({ products }) => {

    return <div className="row col col-sm-3"> 
        <div className="row todos">
            <img src={products?.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{products?.nombre}</h5>
                <p className="card-text">Precio: ${products?.precio}</p>
                <NavLink to={`/item/${products?.id}`} className="btn btnDetalles"><b>Detalles</b></NavLink>
            </div>
        </div>
    </div>
}

export default Item