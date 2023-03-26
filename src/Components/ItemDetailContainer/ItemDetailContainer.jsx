import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetail from '../ItemDetail/ItemDetail';


// item de prueba para armar la card
const itemPrueba = {
    id: 4,
    title: "Remera 2do Francia",
    price: 4000,
    description: "Estilo slim, mangas largas.Color azúl",
    category: "hombre",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    stock: 4
};



const ItemDetailContainer = () => {


    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(itemPrueba);
            }, 2000);
        });
        getData.then(res => setData(res));

    }, [])



    const onAdd = (qty) => {
        console.log(`agregaste ${qty} unidades al carrito`);

    }

    return (
        <div>
            <ItemDetail data={data} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetailContainer