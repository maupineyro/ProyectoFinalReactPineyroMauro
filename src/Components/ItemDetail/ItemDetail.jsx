import React from 'react'

const ItemDetail = ({ data }) => {
    return (
        <>
            <div className='titleSetup textCenter'>
                <h2>DETALLE DEL PRODUCTO</h2>
            </div>
            <div className='textCenter'>
                <div className='itemDetail border border-2 border-info textCenter'>
                    <img src={data.image} alt={data.title} />
                    <h3>{data.title}</h3>

                    <p className='textCenter'> {data.description}</p>
                    <p>stock: {data.stock}</p>
                    <p>Precio <b>${data.price}</b></p>

                </div>

            </div>
        </>

    )
}

export default ItemDetail