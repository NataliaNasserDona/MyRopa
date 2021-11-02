import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ ropa, setContador }) => {

    const onAdd = (numero) => {
        setContador(numero);
    };

    return <>
        <div className="col-sm-12 row every">
            <div className="col-sm-6 tamimg">
                <img src={ropa?.img} className="card-img-top " alt="..." />
            </div>
            <div className="col-sm-6">
                <h5 className="card-title nombre"><b>{ropa?.nombre}</b></h5>
                <p className="card-text info">{ropa?.info}</p>
                <p className="card-text precio"><b>Precio: </b> ${ropa?.precio}</p>
                <ItemCount stock='5' onAdd={onAdd} />
            </div>
        </div>

    </>

}

export default ItemDetail
