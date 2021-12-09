import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import btnBorrar from "../../assets/img/btnBorrar.png"
import './CartItem.css'

const CartItem = ({ prod }) => {

    const { removerItem } = useContext(CartContext)

    return (
        <div className="container col-sm-12 all" >
            <div className="col-sm-1 delete">
                <img src={btnBorrar} className="btnBorrar" onClick={() => removerItem(prod.id)} alt="borrar" />
            </div>
            <div className="col-sm-2">
                <img src={prod.img} className="foto" alt="prod"/>
            </div>
            <div className="col-sm-3 nom">
                <p><b>{prod.nombre}</b></p>
            </div>
            <div className="col-sm-1 cant">
                <label><b>{prod.quantity}</b></label>
            </div>
            <div className="col-sm-1 price">
                <p><b>${prod.precio}</b></p>
            </div>
            <div className="col-sm-3">
                <p className="tot"><b>${prod.quantity * prod.precio}</b></p>
            </div>
        </div>
    )
}

export default CartItem