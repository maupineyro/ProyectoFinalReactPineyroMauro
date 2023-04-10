import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


//1er paso, traer el servicio de Firebase
//2do paso, crear el puntero al dato que quiero mostrar
//3er paso, traer el dato con una promise


//este componente me tiene que traer los datos y filtrarme solo un id de producto, para ver los detalles con el itemDetail
const ItemDetailContainer = () => {

    // useState y useParams
    const [data, setData] = useState({});
    const { itemId } = useParams();


    //useEffect para la petición
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "products", itemId);
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [itemId]);

    return (
        <div>
            <ItemDetail data={data} />

        </div>
    )
}

export default ItemDetailContainer