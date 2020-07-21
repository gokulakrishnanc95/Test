import React from 'react'

function Columns(){
    const items = ["name", "GK", "25"]
    return(
        <React.Fragment>
            {
            items.map(item => (
            <React.Fragment key={item}>
            <td>{item}</td>
            </React.Fragment>
            ))
            }
            <td>Name</td>
            <td>GK</td>
        </React.Fragment>

    )
}
export default Columns