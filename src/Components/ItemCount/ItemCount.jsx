import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));

        return () => {

        }
    }, [initial])



    return (
        <div className='counter textCenter'>
            <Button className='button itemCountbutton' variant="outline-dark" onClick={decrease} disabled={count <= 1}>-</Button>
            <span> {count} </span>
            <Button className='button itemCountbutton' variant="outline-dark" onClick={increase} disabled={count >= stock}>+</Button>
            <div>
                <Button className='button' variant="outline-dark" onClick={() => onAdd(count)} disabled={stock <= 0} >Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount