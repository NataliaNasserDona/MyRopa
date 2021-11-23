import { useContext } from "react";
import {CartContext} from "../../Context/CartContext/CartContext"

const Buy = () => {
    const { id } = useContext(CartContext)

    return (
        <div>
            <p>Termine su Compra</p>
            <p>Tu Código de Compra es: {id} </p>
        </div>
    )
}

export default Buy