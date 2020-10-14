import React from 'react'
import {Link} from 'react-router-dom'

function Tabs() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="shopping">Shopping</Link></li>
                <li><Link to="cart">Cart</Link></li>
            </ul>
        </div>
    )
}

export default Tabs