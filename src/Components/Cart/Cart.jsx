import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    //emitir compra y formulario

    //states para guardar datos del form
    const [buyerName, setBuyerName] = useState('')
    const [buyerEmail, setBuyerEmail] = useState('')
    const [buyerPhone, setBuyerPhone] = useState('')

    //crear la constante order

    const order = {
        buyer: {
            name: buyerName,

            email: buyerEmail,
            phone: buyerPhone
        },
        items: cart,
        total: totalPrice()
    }
    console.log(order);

    return (
        <div>
            <h3 className='titleSetup textCenter'>Carrito de Compras</h3>
            {(cart.length === 0) ?
                <div className='textCenter flexCol'> <img className='notProducts' src="https://letrasrecortadas.com/carritoVacio.png" alt="imagen de carrito vacio" /><h4 className='mt-3 mb-5'>No hay productos en el carrito </h4>
                    <Button className='button ' variant="outline-dark"> <Link className='text-info' to="/" >Ver Catálogo</Link>

                    </Button></div> :
                <div className='flexCol textCenter'>
                    {cart.map(product => <ItemCart key={product.id} product={product} />)}
                    <h4 className='textCenter flexCol mb-5'>Total: $ {totalPrice()} </h4>

                    <div className='ordenFormContainer'>
                        <form className='flexCol p-2' >
                            <label className='p-2'>
                                Nombre:<br />
                                <input required type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
                            </label>
                            <label className='p-2' >
                                Teléfono:<br />
                                <input required type="text" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)} />
                            </label>
                            <label className='p-2' >
                                Email:<br />
                                <input required type="email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} />
                            </label>

                            <button className='button mt-5' type="submit">Emitir compra</button>

                        </form>
                    </div>










                </div>}





        </div>
    )
}

export default Cart