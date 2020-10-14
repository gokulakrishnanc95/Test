import React, {useReducer} from 'react'
import CategoryShow from './CategoryShow'

export const CartContext = React.createContext()

const initialState = []
const reducer = (state, action) => { 
    switch(action.action){
        case 'add': return [...state, action.data];
        // case 'del': [...state, action.data]
        case 'del': 
        {
            let array = state
            array.splice(action.index, 1)
            return array
        }
        case 'update':
            {
                let array = state
            array.splice(action.index, 1, action.data)
            return array
            }
        // case 'del':  return state.splice(action.index, 1);
        // case 'del': console.log(action.index)
    }
}

function Orders() {
    const [cart , setCart] = useReducer(reducer, initialState)
    return (
        <div className="container">
            <CartContext.Provider value={{cart: cart, setCart: setCart}}>
                <CategoryShow />
            </CartContext.Provider>
        </div>
    )
}

export default Orders
