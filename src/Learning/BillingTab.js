import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'

class BillingTab extends Component {
    constructor(props) {
        super(props)
        this.line = 3
        this.initial = {
            ItemCode: [''],
            ItemName: [''],
            ItemPrice: [''],
            ItemQuantity: ['']
        }
        this.state = this.initial
        // this.handleLastEnter = this.handleLastEnter.bind(this)
        this.createIterate = this.createIterate.bind(this)
    }
    handleLastEnter(event){
        alert("im inhandleLastEnter")
    }

    createIterate(e){
        alert("im here")
        let i = this.line
        let data = this.state.map(detail => {
            return(
            <tr key={i}>
                <td><input type="text" value={this.state.ItemCode[{i}]} onChange={(event) => this.setState({ItemCode: [...this.state.ItemCode, event.target.value]})}/></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" disabled/></td>
            </tr>
            )
        })
        return data
        // let data = () => {
        //     return( for(i=0; i<=this.line; i++){
        //     <React.Fragment>
        //     <tr key={i}>
        //         <td><input type="text" /></td>
        //         <td><input type="text" /></td>
        //         <td><input type="text" /></td>
        //         <td><input type="text" /></td>
        //         <td><input type="text" disabled/></td>
        //     </tr>
        // </React.Fragment>
        // }}
        // return({data})
        // return {data}
    }

    render() {
        return(
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td>ItemCode</td>
                        <td>ItemName</td>
                        <td>ItemQuantity</td>
                        <td>ItemPrice</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    <tr key="test">
                     <td><input type="text" /></td>
                     <td><input type="text" /></td>
                     <td><input type="text" /></td>
                     <td><input type="text" /></td>
                     <td><input type="text" disabled/></td>
                     </tr>
                    {this.handleLastEnter}
                    {this.createIterate}
                </tbody>
            </Table>
        )
    }
}
export default BillingTab