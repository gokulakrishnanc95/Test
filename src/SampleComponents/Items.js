import React from 'react'
import Item from './Item'

export default function Items(props) {
    return (
        <>
            {props.items.map(item => (
                <Item 
                    key={item.id} 
                    item={item} 
                    onChange={props.onChange}
                    onIncreament={props.onIncreament} 
                    onDecreament={props.onDecreament} 
                    onRemove={props.onRemove}
                />
            ))}
        </>
    )
}
