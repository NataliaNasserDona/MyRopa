import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({count, setCount}) => {
    return <> 
        <h1>Bienvenido a MyRopa</h1>
        <h2>En Proceso...</h2>

        <ItemCount count={count} setCount = {setCount} stock='5' />
    </>
}

export default ItemListContainer