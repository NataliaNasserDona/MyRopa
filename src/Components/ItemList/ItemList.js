import Item from "../Item/Item";

const ItemList = ({productos}) => {
    return <div className="row">
        {productos.map(products => (<Item products = {products}/>))}
    </div>
}

export default ItemList
