import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import "./Cart.css"
import CartList from "../CartList/CartList"
import { NavLink, Link } from "react-router-dom"

const Cart = () => {
    const { cart, getTotal } = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect (() => {
        setTotal(getTotal())
    }, [total, cart])

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
                <div><NavLink to="/buy" type="button" class="btn btn-outline-primary" >Comprar</NavLink></div>
                <p className="total"><b>TOTAL FINAL: ${total}</b></p>

            </div>
           
        }
    </>)
}

export default Cart