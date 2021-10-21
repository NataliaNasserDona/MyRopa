import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({setContador}) => {

    const onAdd = (numero) => {
        setContador(numero);
    };

    return (<>
        <h1>Bienvenido a MyRopa</h1>
        <h2>En Proceso...</h2>

        <ItemCount stock='5' onAdd = {onAdd}/>
    </>)
}



export default ItemListContainer