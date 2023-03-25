import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    //este products llega como props del componente padre "ItemListContainer"
    //tengo que mapearlo, singularizando a product con un key único

    return (
        <>
            {products.map((product) => <Item key={product.id} product={product} />)}
        </>
    )
}

export default ItemList