import Item from "../Item/Item";

const ItemList = ({prod}) => {
    return <div className="row">
        {prod.map(products => (<Item key={products.id} products = {products}/>))}
    </div>
}

export default ItemList
