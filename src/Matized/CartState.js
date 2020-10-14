import React , {useReducer} from 'react'
import {cartReducer} from './cartReducer'

const reducer = cartReducer

const initailState = []
const cart = {};
const setCart = '';

function CartState() {
    const [cart, setCart] = useReducer(reducer, initailState)
    cart = cart
    setCart = setCart
    return (
        <div>
            
        </div>
    )
}

export {cart}
export {setCart}