import React from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext()
    return (
        <div className='itemCart my-5 p-4'>
            <img src={product.image} alt={product.title} />
            <div>
                <p>Título:{product.title} </p>
                <p>Cantidad:{product.quantity} </p>
                <p>Precio por Unidad:{product.price} </p>
                <p>Subtotal: ${product.quantity * product.price} </p>

                <Button className='button' variant="outline-dark" onClick={() => removeProduct(product.id)}> Eliminar </Button>

            </div>
        </div>
    )
}

export default ItemCart