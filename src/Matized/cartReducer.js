// import React from 'react'

function cartReducer(state, action) {
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

export { cartReducer }
