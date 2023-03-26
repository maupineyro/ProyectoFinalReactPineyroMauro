import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

//importo desde el CartContext, el hook personalizado useCartContext
import { useCartContext } from '../../context/CartContext';




//el componente ItemDetail:
const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false)
    const { addProduct } = useCartContext();



    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);

    }



    return (
        <>
            <div className='titleSetup textCenter'>
                <h2>DETALLE DEL PRODUCTO</h2>
            </div>
            <div className='textCenter'>
                <div className='itemDetail border border-2 border-info '>
                    <img src={data.image} alt={data.title} />
                    <h4 className='p-3 textCenter counter'>{data.title}</h4>

                    <p className='px-2 my-5'> {data.description}</p>
                    <p>stock: {data.stock}</p>
                    <p>Precio <b>${data.price}</b></p>
                    {
                        goToCart ? <Link to='/cart'>Ir al Carrito para continuar compra</Link> : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }

                </div>

            </div>
        </>

    )
}

export default ItemDetail