import React from 'react'
// import {Link} from 'react-router-dom'

const NavBar =() => {
    return (
        <nav className = "nav-wrapper">
            <div className="container" >
                <a to="/" className="brand-logo">Shopping</a>
                <ul className="right">
                    <li>shop</li>
                    <li>My cart</li>
                    <li><i className="material-icons">shopping_cart</i></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar