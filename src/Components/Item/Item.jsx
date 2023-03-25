import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {

    //acá no me tengo que olvidar de desestructurar el product en la prop. porque sino llega el objeto pero no lee los datos internos
    return (
        <div className='item border border-2 border-info'>
            <img src={product.image} alt='producto' />
            <div>
                <h3>{product.title}</h3>
                <p>Price ${product.price}</p>
                <Link className='button' to={`/item/${product.id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Item