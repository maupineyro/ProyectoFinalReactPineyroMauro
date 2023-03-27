import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {

    const { cart, totalPrice } = useCartContext();


    return (
        <div>
            <h3 className='titleSetup textCenter'>Carrito de Compras</h3>
            {(cart.length === 0) ?
                <div className='textCenter flexCol'> <img src="https://letrasrecortadas.com/carritoVacio.png" alt="imagen de carrito vacio" /><h4 className='m-3'>No hay productos en el carrito </h4>
                    <Button className='button ' variant="outline-dark"> <Link className='text-info' to="/" >Ver Catálogo</Link>

                    </Button></div> :
                <div> {cart.map(product => <ItemCart key={product.id} product={product} />)} </div>}
        </div>
    )
}

export default Cart