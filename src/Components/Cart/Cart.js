import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import "./Cart.css"
import CartList from "../CartList/CartList"
import { NavLink, Link } from "react-router-dom"
import {newOrder} from "../../Firebase/index"

const Cart = () => {
    const { cart, getTotal, setCart, setId, buyer, setBuyer } = useContext(CartContext)
    const [total, setTotal] = useState(0)

    const orden = () => {
        const orders = {
            buyer: buyer,
            items: cart,
            total: total
        };
        newOrder(orders, setId);
        setTotal(0);
        setBuyer();
        setCart([]);
    }

    useEffect(() => {
        setTotal(getTotal())
    }, [total, cart, getTotal])

    return (<>
        {(cart.length === 0) ?
            <div>
                <h1 className="titulo"><b>CARRITO</b></h1>
                <p className="titulo"><b>Su carrito está vacío</b></p>
                <Link to="/" className="volver"><b>Volver al Home</b></Link>
            </div>
            :
            <div>
                <h1 className="titulo"><b>CARRITO</b></h1>
                <p className="total"><b>TOTAL</b></p>
                <main>
                    <CartList cart={cart} />
                </main>
                <p className="total"><b>TOTAL FINAL: ${total}</b></p>
                {buyer === undefined ?
                    <NavLink to="/frmcompra" type="button" class="btn btn-outline-primary">Realizar Compra</NavLink>
                    :
                    <>
                        <div className="styleEnvio">
                            <div className="datosEnvio">
                                <p className="p"><b>DATOS DEL ENVÍO</b></p>
                                <p className="p"><b>E-mail: </b>{buyer.email}</p>
                                <p className="p"><b>Dirección: </b>{buyer.calle} {buyer.nCalle}</p>
                                <NavLink to="/frmcompra" type="button" class="btn btns btn-outline-primary" onClick={() => setBuyer()}>Editar Datos</NavLink>
                            </div>
                            <div>
                                <NavLink to="/BuyDetail" type="button" class="btn btns btnTermCompra btn-outline-primary" onClick={() => orden()}>Terminar Compra</NavLink>
                            </div>
                        </div>
                    </>
                }
            </div>
        }
    </>)
}

export default Cart