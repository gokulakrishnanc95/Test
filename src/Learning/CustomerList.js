import React from 'react'
import CustomerData from './CustomerData.json'
import Table from 'react-bootstrap/Table'

let data= CustomerData.map(data => {
    return(
        <tr key={data.mobileNumber}>
            <td>{data.name}</td>
            <td>{data.mobileNumber}</td>
        </tr>
    )
})

function CustomerList () {
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </Table>
        </div>
    )
}

export default CustomerList