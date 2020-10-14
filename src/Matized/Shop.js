import React from 'react'
import {Link} from 'react-router-dom'

export default function Shop(props) {
    return (
        <>
            <div className="divider"></div>
            <div className="section">
                <Link to={`/Shopping/${props.shop.s_id}`} ><h5>{(props.shop.name).toUpperCase()}</h5></Link>
                <p>{props.shop.address}</p>
            </div>
        </>
    )
}
