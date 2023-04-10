import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Title from '../Title/Title';

//1er paso, traer el servicio de Firebase
//2do paso, crear el puntero al dato que quiero mostrar
//3er paso, traer el dato con una promise




//este componente me tiene que traer los productos
const ItemListContainer = () => {


    //seteo el useState con el list array y su modificador
    const [data, setData] = useState([]);

    //uso el useParams
    const { categoryId } = useParams();

    //aquí el useEffect
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "products");


        if (categoryId) {
            const queryFilter = query(queryCollection, where("category", "==", categoryId));

            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))));

        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))));
        }

    }, [categoryId])

    return (
        <>
            <Title />
            <div className='listContainer'>

                <ItemList products={data} />
            </div>
        </>

    )
}

export default ItemListContainer