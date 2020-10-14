import React from 'react'
import {Link} from 'react-router-dom'

export default function TabBar() {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a href="#" className="brand-logo">Noyyal</a>
                {/* <span>The new shopping experience</span> */}
                <ul className="right">
                <li><input type="search" placeholder="Search Item / Shop"></input></li>
                    <li ><Link to='/Shopping'>Shopping</Link></li>
                    <li><Link to="/Orders">Orders</Link></li>
                    <li><Link to='/Login'>Login</Link></li>
                    <li><Link to='/Cart'>Cart</Link></li>
                </ul>
            </div>
        </nav>
    )
}
