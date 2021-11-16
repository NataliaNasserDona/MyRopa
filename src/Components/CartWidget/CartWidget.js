import carro from '../../assets/img/carro.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({contador}) => {
    return <>
        <div className="posicion">
            <Link to="/Cart">
            <img src={carro} className='tamCarro' alt='imgCarro' />
            </Link>
            <p className="cant">{contador}</p>
        </div>
    </>
}

export default CartWidget