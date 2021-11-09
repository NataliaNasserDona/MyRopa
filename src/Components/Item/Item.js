import { NavLink } from "react-router-dom"
import "./Item.css"

const Item = ({ products }) => {

    return <div className="row col col-sm-3 centrar"> 
        <div className="row todos">
            <img src={products?.img} className="card-img-top tamañoImg" alt="..." />
            <div className="card-body">
                <h5 className="card-title name"><b>{products?.nombre}</b></h5>
                <p className="card-text pre">Precio: ${products?.precio}</p>
                <NavLink to={`/item/${products?.id}`} className="btn btnDetalles"><b>Detalles</b></NavLink>
            </div>
        </div>
    </div>
}

export default Item