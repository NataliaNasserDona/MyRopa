import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext"


const ItemDetail = ({ ropa, setContador, contador}) => {

    const [carro, setCarro] = useState(false);
    const [valCarro, setValCarro] = useState(0);
    const { addItem } = useContext(CartContext); 

    const onAdd = () => {
        setContador(contador + valCarro);
        setCarro(true);
        addItem(ropa, valCarro)
    }

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
                    <div>
                        <ItemCount stock='5' setCarro={setCarro} carro={carro} valCarro={valCarro} setValCarro={setValCarro}/>
                        <button type="button" class="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>
                        
                    </div>
                    :
                    <div>
                        <p className="precio">Ya agregaste este producto a tú carrito</p>
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