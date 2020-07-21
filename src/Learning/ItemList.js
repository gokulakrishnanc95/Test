import React from 'react'
import ItemData from './ItemList.json'
import Table from 'react-bootstrap/Table'
import TableShow from './TableShow'

let data= ItemData.map(data => {
    return(
        <tr key={data.itemCode}>
            <td>{data.itemCode}</td>
            <td>{data.itemName}</td>
            <td>{data.itemSellingPrice}</td>
            <td>{data.itemPurchasePrice}</td>
            <td>{data.itemMaxDiscount} %</td>
            <td>{data.itemUnit}</td>
            <td>{data.itemMinUnitSale}</td>
            <td>{data.isGudownDelivery}</td>
            <td>{data.gudownName}</td>
            <td>{data.maxSaleUnit}</td>
        </tr>
    )
})

function ItemList () {
    const top1 = {
        // position: 'top',
        paddingLeft: '10px',
        paddingRight: '10px'
    }
    return (
        <div className="ItemTab">
            <div className="ItemSubTab" style={top1}>
                <button>Add Item</button>
            </div>
            <div className="ItemList" style={top1}>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Item Code</th>
                        <th>Item Name</th>
                        <th>Selling Price</th>
                        <th>Purchase Price</th>
                        <th>Maximum Discound</th>
                        <th>Unit</th>
                        <th>Minimum Purchase</th>
                        <th>Is Gudown Delivery</th>
                        <th>Gudown Name</th>
                        <th>Max Purchase</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </Table>
            </div>
            <div>
                <p>Inside TabnleShow</p>
                <TableShow data={ItemData} />
            </div>
        </div>
    )
}

export default ItemList