import carro from '../../assets/img/carro.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = ({contador}) => {
    return <>
        <div className="posicion">
            <Link to="/Cart">
            <img src={carro} className='tamCarro' alt='imgCarro' />
            </Link>
            <label className="cant">{contador}</label>
        </div>
    </>
}

export default CartWidget