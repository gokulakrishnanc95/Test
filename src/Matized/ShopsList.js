import React, { Component } from 'react'
import Shop from './Shop'
import ShopsData from './shops.json'

export class ShopsList extends Component {
    render() {
        return (
            <div className="container">
                {
                    ShopsData.map(shop =><Shop key={shop.s_id} shop={shop} /> )
                }
            </div>
        )
    }
}

export default ShopsList
