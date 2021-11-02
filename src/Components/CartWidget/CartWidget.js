import carro from '../../assets/img/carro.png'
import './CartWidget.css'

const CartWidget = ({contador}) => {
    return <>
        <div className="posicion">
            {/* <label className="precio">$0</label> */}
            <img src={carro} className='tamCarro' alt='imgCarro' />
            <label className="cant">{contador}</label>
        </div>
    </>
}

export default CartWidget