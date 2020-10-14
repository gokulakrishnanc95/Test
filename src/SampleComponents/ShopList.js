import React, { Component } from 'react'
import Shops from './Shops'
import ShopsData from './ShopList.json'

class ShopList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loc: ''
        }
        this.data = ShopsData;
    }

    handleChange = e => {
        this.setState({ loc: e.target.value });
    }

    render() {
        return (
            <div>
                {this.data.length > 0 ?
                    <div>
                        <select name="Locations" onChange={this.handleChange}>
                            {this.state.loc ? '' : <option value="select">--Select Value--</option>}
                            {
                                this.data.map(shop =>
                                    // <div>
                                    <option value={shop.loc}>
                                        {shop.loc.toUpperCase()}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                    :
                    <h1>Oops! Something Went wrong !!!</h1>
                }
                {
                    this.state.loc ? (
                        <div>
                            {this.data.map(d => { return d.loc === this.state.loc ? <Shops shops={d.shops} /> : null })}
                        </div>
                    )
                        : <h1>Select Location</h1>
                }
            </div>
        )
    }
}

export default ShopList