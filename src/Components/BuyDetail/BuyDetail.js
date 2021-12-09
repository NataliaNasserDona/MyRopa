import "./BuyDetail.css"
import { NavLink } from "react-router-dom"
import {useContext} from "react"
import { CartContext } from "../../Context/CartContext/CartContext"

const BuyDetail = () => {

    const { id } = useContext(CartContext)

    return (
        <div>
            <p className="p"><b>COMPRA FINALIZADA</b></p>
            <p className="p"><b>EL CÓDIGO DE SU ORDEN ES: {id}</b></p>
            <NavLink className="p" to="/"><b> Volver al Home </b></NavLink>
        </div>
    )
}

export default BuyDetail