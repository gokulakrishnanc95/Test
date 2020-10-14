import React, { Component } from 'react'
import Items from './Items'
import CartValue from './CartValue'

class Greet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counters : [
                 {id:1, value: 0, name: "bis"},
                 {id:2, value: 0, name: "Choc"},
                 {id:3, value: 0, name: "bulb"},
                 {id:4, value: 0, name: "rice"}
             ]
        }
    }

    handleChange = (counter,value) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value =  value <=20 ? value : counters[index].value;
        this.setState({ counters });
      };

    handleIncreament = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value =  counters[index].value < 20 ? (++counters[index].value) : (counters[index].value);
        this.setState({ counters });
      };

      handleDecreament = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value =  counters[index].value > 0 ? (--counters[index].value) : (counters[index].value);
        this.setState({ counters });
      };

      handleRemove = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value = 0;
        this.setState({ counters });
      };
    
    render() {
        const count = this.state.counters.filter(c => c.value > 0).length;
        return (
            <>
                <CartValue count = {count}/>
                <br />
                <Items 
                    items={this.state.counters}
                    onChange={this.handleChange}
                    onIncreament={this.handleIncreament} 
                    onDecreament={this.handleDecreament} 
                    onRemove={this.handleRemove}
                />
            </>
        )
    }
}

export default Greet
