import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const isInCart = (itemId) => {
        let inCart = false
        inCart = cart.some((product) => product.id === itemId)
        return inCart
    }

    const addItem = (item, cantidad) => {

        if (isInCart(item.id)) {
            const update = cart.map((prod) => {
                if (prod.id === item.id) {
                    const newCantidad = prod.quantity + cantidad
                    return {
                        ...prod,
                        cantidad: newCantidad
                    }
                }
                return prod
            })
            setCart([update])
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
        <CartContext.Provider value={{ addItem, removerItem, limpiarCart}}>
            {children}
        </CartContext.Provider>
    )
}




