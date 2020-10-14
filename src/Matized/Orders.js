import React, { useReducer } from 'react'
import CategoryShow from './CategoryShow'

export const CartContext = React.createContext()

// const initialState = [{ item_code: "gw200", item_sale_on_type: "piece", count: "11" }, { item_code: "gw1", item_sale_on_type: "piece", count: "10" }]
const initialState = []
const reducer = (state, action) => {
    const findindex = state.findIndex(c => c.item_code === action.item_code);
    switch (action.action) {
        case 'addorupdate':
            {
                if (findindex === -1) {
                    return [...state, action.data];
                }
                else {
                    let array = state
                    array.splice(findindex, 1, action.data)
                    return array
                }
            }
        case 'remove':
            {
                let array = state
                array.splice(findindex, 1)
                return array
            }
        default: return state
    }
}

function Orders() {
    const [cart, setCart] = useReducer(reducer, initialState)
    return (
        <div className="container">
            <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
                <CategoryShow />
            </CartContext.Provider>
        </div>
    )
}

export default Orders
