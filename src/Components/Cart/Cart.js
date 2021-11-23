import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import "./Cart.css"
import CartList from "../CartList/CartList"
import { NavLink, Link } from "react-router-dom"
import { getFirestore } from "../../Firebase/index";
import { collection, addDoc } from 'firebase/firestore'

const Cart = () => {
    const { cart, getTotal, setCart, id, setId} = useContext(CartContext)
    const [total, setTotal] = useState(0)

    const orden = () => {
        const order = {
            buyer: { name: "Natalia", phone: "12345678", email: "a@a.com" },
            items: cart,
            total: total
        };
        const db = getFirestore();
        const colOrdenes = collection(db, "ordenes");
        addDoc(colOrdenes, order).then(({id}) => setId(id));

        setCart([])
    }

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
                <div><NavLink to="/buy" type="button" class="btn btn-outline-primary" onClick={() => orden()}>Comprar</NavLink></div>
                <p className="total"><b>TOTAL FINAL: ${total}</b></p>
            </div>
           
        }
    </>)
}

export default Cart