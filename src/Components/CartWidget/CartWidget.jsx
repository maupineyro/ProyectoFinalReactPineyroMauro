import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalProducts } = useCartContext();


    return (
        <div>
            <li>
                <NavLink className="linkCarrito botonMenu" to='/cart'>

                    < i className="bi bi-cart-fill"></i>
                    <span id="numeroCarritoIndex" className="numeroEnCarrito"> {totalProducts() || ""} </span>
                </NavLink>

            </li>
        </div >
    )
}

export default CartWidget