import "./Item.css"

const Item = ({ products }) => {
    return <div className="row col"> 
        <div className="row">
            <img src={products?.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-title">{products?.nombre}</h2>
                <p className="card-text">{products?.precio}</p>
                <a href="#" class="btn btn-primary">Detalles...</a>
            </div>
        </div>
    </div>
}

export default Item