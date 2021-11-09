import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ ropa, setContador, contador }) => {

    const [carro, setCarro] = useState(false);

    return <>
        <div className="col-sm-12 row every">
            <div className="col-sm-6 tamimg">
                <img src={ropa?.img} className="card-img-top " alt="..." />
            </div>
            <div className="col-sm-6">
                <h5 className="card-title nombre"><b>{ropa?.nombre}</b></h5>
                <p className="card-text info">{ropa?.info}</p>
                <p className="card-text precio"><b>Precio: </b> ${ropa?.precio}</p>
                {!carro ?
                    <ItemCount stock='5' setCarro={setCarro} contador={contador} setContador={setContador} />
                    :
                    <div>
                        <p className="precio">Ya agregaste este producto al carrito</p>
                        <NavLink to="/Cart"><button type="button" class="btn btn-info btn-sm">Ir al carrito</button>
                        </NavLink>
                        <NavLink to="/"><button type="button" class="btn btn-secondary btn-sm">Ir al Home</button>
                        </NavLink>
                    </div>
                }
            </div>
        </div>
    </>
}

export default ItemDetail
