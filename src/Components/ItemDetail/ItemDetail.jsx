import React from 'react'

const ItemDetail = ({ data }) => {
    return (
        <>
            <div className='titleSetup textCenter'>
                <h2>DETALLE DEL PRODUCTO</h2>
            </div>
            <div className='textCenter'>
                <div className='itemDetail border border-2 border-info textCenter'>
                    <div>
                        <img src={data.image} alt={data.title} width='500px' />
                    </div>
                    <div>
                        <h3>{data.title}</h3>
                        <p>Categoría:{data.category}</p>
                        <p>Precio <b>${data.price}</b></p>
                        <p>Descripción: {data.description}</p>
                        <p>stock: {data.stock}</p>

                    </div>
                </div>










            </div>
        </>

    )
}

export default ItemDetail