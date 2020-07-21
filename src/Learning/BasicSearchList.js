import React from 'react'
import ItemList from './ItemList.json'

function BasicSearchList (props) {
    const itemList = ItemList
    // const list = itemList.map(item => { return (item.code.toLowerCase() === props.code.toLowerCase() ? <li>{item.code}</li> : null)})
    // const toSendCode = "From toSendCode"
    const list = itemList.map(item => { return (item.code.toLowerCase().startsWith(props.code.toLowerCase()) ? <li key={item.code} value={item.code}><a>{item.code}  {item.name}  price: {item.selling_price} </a></li> : null)})
    return <>{list}</>
}
export default BasicSearchList
