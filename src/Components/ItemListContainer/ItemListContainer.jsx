import React, { useEffect, useState } from 'react';
import getList from '../../utils/getProducts';
import ItemList from '../ItemList/ItemList';
import Title from '../Title/Title';

const ItemListContainer = () => {
    //este componente me tiene que traer los productos

    //seteo el useState con el list array y su modificador
    const [arrayList, setArrayList] = useState([]);

    //aquí el useEffect
    useEffect(() => {
        getList()
            .then((response) => setArrayList(response))
            .catch((err) => console.error(err))
            .finally()
    }, [])

    return (
        <>
            <Title />
            <div className='listContainer'>

                <ItemList products={arrayList} />
            </div>
        </>

    )
}

export default ItemListContainer