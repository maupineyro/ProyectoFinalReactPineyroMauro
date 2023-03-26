import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


//CartProvider

//la lógica la tengo que poner antes del return del componente.













const CartProvider = ({ children }) => {


    //useState [cart-setCart] para guardar el estado del carrito
    const [cart, setCart] = useState([]);

    //clearCart para poner el carrito en array vacio
    const clearCart = () => setCart([]);

    //Isincart para ver si el producto ya está en el carrito    
    const IsInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }
    //RemoveProduct
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));


    //addProduct para agregar producto sin que repita

    //const addProduct = (item, newQuantity) => {
    //    const newCart = cart.filter(prod => prod.id !== item.id);
    //    newCart.push({ ...item, quantity: newQuantity })
    //    setCart(newCart);
    //}

    //uso esta porque contiene la función IsInCart
    const addProduct = (item, quantity) => {
        if (IsInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    console.log("carrito: ", cart);

    // calcula el precio  total:  reduce recorre cada item del array, y va sumando el total, prev arranca en cero, pero cuando va al 2do item, vale el total del 1er item, asi sucesivamente.
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    //calcula el total de elementos
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);








    return (
        <CartContext.Provider value={{
            clearCart,
            IsInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider