import React, {useState} from 'react'
import ItemList from './ItemList.json'
import './BasicSearchHook.css'


function BasicSearchHook () {
    const [searchKeyword, setSearchKeyword] = useState('')
    // const [orderTable, setOrderTable] = useState([{code: '', name: '', quantity: '', unit: '', price: '', tPrice: ''}])
    const [orderTable, setOrderTable] = useState([])
    function createList() {
        const itemList = ItemList
        const list = itemList.map(item => {
            return (
                item.code.toLowerCase().includes(searchKeyword.toLowerCase()) ? 
                    <li key={item.code} value={item.code}>
                        {/* <button onClick={(event) => setSearchKeyword(event.target.value)} value={item.code}> */}
                        <button value={item.code} onClick={() => setOrderTable([...orderTable, {
                            code: item.code,
                            name: item.name,
                            quantity: 1,
                            unit: item.unit,
                            price: item.selling_price,
                            tPrice: item.selling_price
                        }])} >
                            {item.code}  {item.name}  price: {item.selling_price} 
                        </button>
                    </li>
                    : null
            )
        })
        return <>{list}</>
    }

    function createTable () {
        return (
            <table>
                <thead>
                    <tr>
                        <td><b>Code</b></td>
                        <td><b>Name</b></td>
                        <td><b>Selling Price</b></td>
                        <td><b>Quantity</b></td>
                        <td><b>Unit</b></td>
                        <td><b>Total Price</b></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderTable.map((orderrow, index) => {
                            return (
                                <tr key={orderrow.code }>
                                    <td key={orderrow.code + index}>{orderrow.code}</td>
                                    <td>{orderrow.name}</td>
                                    <td>{orderrow.price}</td>
                                    <td><input type="text" value={orderrow.quantity}></input></td>
                                    <td>{orderrow.unit}</td>
                                    <td>{orderrow.tPrice}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        )
    }

    return (
        <>
        {
            orderTable.length > 0 ? 
            // <div><TableShow data={orderTable}/></div> : 
            <div>{createTable()}</div> :
            console.log('nothing to show')
        }
        <div className="searchBar">
        {
            searchKeyword.length > 0 ?
            <div><ul style={{ listStyleType: "none", paddingLeft: '0px' }}>{createList()}</ul></div> :
            null
        }
        <div>
                <input type="text" value={searchKeyword} onChange={(event) => setSearchKeyword(event.target.value)} placeholder="Enter some text"></input>
        </div>
        </div>
        </>
    )
}

export default BasicSearchHook