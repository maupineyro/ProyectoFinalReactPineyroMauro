import React from 'react'

const ItemList = ({ products }) => {
    //este products llega como props del componente padre "ItemListContainer"
    //tengo que mapearlo, singularizando a product con un key único
    return (
        <>

            {products.map((product) => <div key={product.id}>{product.id} </div>)}


        </>
    )
}

export default ItemList