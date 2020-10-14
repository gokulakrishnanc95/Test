import React, { Component } from 'react'
import ShopsData from './shops.json'
import ShopsList from './ShopsList'

export class Shopping extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             shopid: ''
        }
    }
    
    render() {
        const shopid = this.state.shopid ? 
                <ShopsList />
        :
            <div>
                <ShopsList shoplist={ShopsData} />
            </div>

        return (
            shopid
        )
    }
}

export default Shopping
