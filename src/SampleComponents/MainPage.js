import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Greet from './Greet'
import Cart from './Cart'
import Error from './Error'
import Tabs from './Tabs'
import ShopList from './ShopList'

class MainPage extends Component {
    render() {
        return (
            <>
                <Tabs />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/shopping" component={Greet} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Error} />
                </Switch>
                <ShopList />
            </>
        )
    }
}

export default MainPage
