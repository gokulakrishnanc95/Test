import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from './Orders'

function ItemTypeShow({ item_sale_type, item_code }) {
    const { cart, setCart } = useContext(CartContext)
    const [count, setcount] = useState(0)
    const [type, settype] = useState('')
    const [minqun, setminqun] = useState(0)
    const [price, setprice] = useState(0)
    const [index, setindex] = useState(-1)

    useEffect(() => {
        const findindex = cart.findIndex(c => c.item_code === item_code); //{item_code: "gw200", item_sale_on_type: "piece",count: "11" }
        if (findindex === -1) {
            settype(item_sale_type[0].item_sale_on_type);
        }
        else {
            const data = cart.find(c => c.item_code === item_code)
            setindex(findindex);
            settype(data.item_sale_on_type);
            setcount(data.count);
        }
        setminqun(item_sale_type[0].min_quantity);
        setprice(item_sale_type[0].item_sale_on_type_price);
    }, [])

    const handleRemove = () => {
        const obj = { action: 'remove', item_code: item_code }
        setCart(obj)
        setcount(0)
    }

    const handleReduce = () => {
        if (count > minqun) {
            const obj = { action: 'addorupdate', item_code: item_code, data: { item_code: item_code, item_sale_on_type: type, count: count - 1 } }
            setCart(obj)
            setcount(prevcount => prevcount - 1)
        }
        else {
            const obj = { action: 'remove', item_code: item_code }
            setCart(obj)
            setcount(0)
        }

    }

    const handleAdd = () => {
        const newcount = count === 0 ? minqun : count - (-1)
        const obj = { action: 'addorupdate', item_code: item_code, data: { item_code: item_code, item_sale_on_type: type, count: newcount } }
        setCart(obj)
        setcount(newcount)
    }

    const handleSelect = (e) => {
        const data = item_sale_type.find(i => i.item_sale_on_type === e.target.value)
        console.log(data);
        const newcount = count > data.min_quantity ? count : data.min_quantity
        settype(e.target.value)
        setminqun(data.min_quantity);
        setprice(data.item_sale_on_type_price);
        // setcount(newcount)
        if (count) {
            const obj = { action: 'addorupdate', item_code: item_code, data: { item_code: item_code, item_sale_on_type: e.target.value, count: newcount } }
            setCart(obj)
            setcount(newcount)
        }
    }

    const inCart = count ? false : true
    const showCount = count ? count : minqun

    return (
        <>
            <button disabled={inCart} onClick={handleReduce}> - </button>
            <label disabled={inCart}> {showCount} </label>
            <button onClick={handleAdd}>{inCart ? 'Add' : '+'}</button>
            <select className="blue" name="sale-type" value={type} onChange={handleSelect}>
                {item_sale_type.map(sale_type => { return <option key={`${item_code}${sale_type.item_sale_on_type}`} value={sale_type.item_sale_on_type} onClick={handleSelect}>{sale_type.item_sale_on_type}</option> })}
            </select>
            <button hidden={inCart} onClick={handleRemove}>Remove</button>
            <label hidden={inCart}>Total Price : {showCount * price}  Rs  </label>
            <label hidden={inCart}>  **Item Added into Cart  </label>


            <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

            
            <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider" tabIndex="-1"></li>
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
            </ul>
        </>
    )
}

export default ItemTypeShow