import React, { useContext, useState } from 'react'
import { CartContext } from './Orders'

function ItemTypeShow() {
    const { cart, setCart } = useContext(CartContext)
    const [name, setname] = useState('')
    const [key, setkey] = useState('')

    const handleName = (e) => {
        setname(e.target.value)
    }

    const handleKey = (e) => {
        setkey(e.target.value)
    }

    // const handleAdd = (e) => {
    //     const obj = {action: e.target.value,data: {name: name, key: key}}
    //     e.target.value === 'del' ? setname('') : setCart(obj)
    // }

    const handleAddUpdate = () => {
        const index = cart.findIndex(k => k.key === key)
        if (index !== -1) {
            const obj = { action: 'update', index: index, data: { name: name, key: key } }
            setCart(obj)
        }
        else {
            const obj = { action: 'add', data: { name: name, key: key } }
            setCart(obj)
        }
        setkey('')
        setname('')
    }

    const handleDel = (e) => {
        const index = cart.findIndex(k => k.key === key)
        const obj = { action: e.target.value, index: index }
        console.log(index)
        if (index !== -1) {
            setCart(obj)
        }
        setkey('')
        setname('')
    }

    // const handleUpdate = (e) => {
    //     const index = cart.findIndex(k => k.key === key)
    //     const obj = {action: e.target.value, index: index, data: {name: name, key: key}}
    //     setCart(obj)
    //     setkey('')
    //     setname('')
    // }

    // const obj = {name: "sample", key: Math.random() * 100}
    return (
        <div>
            {/* <button onClick={handleAddUpdate}>+</button> */}

            //correct code
            {/*Inside ItemTypesShow {cart? cart.map(c => <h5 key={c.key}>{c.key} {c.name}</h5>) : ''}
            <input type="text" value={name} onChange={handleName} />
            <input type="text" value={key} onChange={handleKey} />
            <button onClick={handleAddUpdate}>Add or Update in Cart</button>
            <button value="del" onClick={handleDel}>Delete in Cart</button>*/}

            {/* <button value="add" onClick={handleAdd}>Add to Cart</button> */}

            {/* <button value="update" onClick={handleUpdate}>Update in Cart</button> */}

            {/* <button onClick={ () => setcart('Inc')}>Add</button>
            <button onClick={ () => setcart('Dec')}>Del</button>
            <button onClick={ () => setcart('Reset')}>Reset</button> */}
        </div>
    )
}

export default ItemTypeShow
