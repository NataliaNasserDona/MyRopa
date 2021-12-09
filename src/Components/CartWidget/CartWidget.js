import carro from '../../assets/img/carro.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'

const CartWidget = () => {

    const {getTotalCount} = useContext(CartContext)

    return <>
        <div className="posicion">
            <Link to="/Cart">
                <img src={carro} className='tamCarro' alt='imgCarro' />
            </Link>
            {(getTotalCount() > 0) &&
                <p className="cant">{getTotalCount()}</p>}
        </div>
    </>
}

export default CartWidget