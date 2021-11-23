import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [id, setId] = useState()

    const getTotal = () => { 
        let total = 0;
        cart.forEach(prod => { 
            total = total + prod.precio * prod.quantity
        })
        return total;
    };

    const isInCart = (itemId) => {
        let inCart = false
        inCart = cart.some((product) => product.id === itemId)
        return inCart
    }

    const addItem = (item, cantidad) => {

        if (isInCart(item.id)) {
            const update = cart.map((prod) => {
                if (prod.id === item.id) {
                    let newCantidad = prod.quantity + cantidad
                    const newProducto = {...prod, quantity: parseInt(newCantidad)}
                    return newProducto             
                }
                return prod
            })
            setCart(update)
        } else {
            const newItem = { 'quantity': cantidad, ...item }

            setCart([...cart, newItem]);
        }
    }

    const removerItem = (id) => {
        const newCart = cart.filter((prod) => prod.id !== id)
        setCart(newCart)
    }

    const limpiarCart = () => {
        setCart([])
    }

    

    return (
        <CartContext.Provider value={{ addItem, removerItem, limpiarCart, cart, getTotal, setCart, id, setId}}>
            {children}
        </CartContext.Provider>
    )
}




