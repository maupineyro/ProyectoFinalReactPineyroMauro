import React from 'react'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
    return (
        <div>
            <li>
                <NavLink className="linkCarrito botonMenu" to='/cart'>

                    < i className="bi bi-cart-fill"></i><span id="numeroCarritoIndex"
                        className="numeroEnCarrito">7</span>
                </NavLink>

            </li>
        </div >
    )
}

export default CartWidget