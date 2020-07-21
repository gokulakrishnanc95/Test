import React, {Component} from 'react'
import CustomerData from './CustomerData.json'
import Form from 'react-bootstrap/Form'
import FormRow from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class AddCustomer extends Component{
    constructor(props) {
        super(props)
        this.count = 0
        this.data = {
            name: [],
            mobileNumber: []
        }
        this.state = {
            name: '',
            mobileNumber: ''
        }

        this.addDetails = this.addDetails.bind(this)
    }

    addDetails (event){
        let isDuplicate = false
        CustomerData.map(cdata => {
            if(cdata.mobileNumber === this.state.mobileNumber){
                isDuplicate = true
            }
        })
        if(isDuplicate){
            alert("Data already exist")
        }
        else{
            this.data.name[this.count] = this.state.name
            this.data.mobileNumber[this.count] = this.state.mobileNumber
            alert(`Data Added Successfully ${this.data.mobileNumber[this.count]}`);
            this.count++
            this.setState({
                name: '',
                mobileNumber: ''
            })
        }
        event.preventDefault()
    }

    componentDidMount() {
        console.log("Mount");
        this.setState({
            name: '',
            mobileNumber: ''
        })
    }

    render(){
        return(
            <Form onSubmit={this.addDetails} className="AddDetails">
                {/* <FormRow> */}
                <Form.Group controlId="formmobilenumber" >
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="Mobile Number" value={this.state.mobileNumber} onChange={(event) => this.setState({mobileNumber: event.target.value})} />
                  <Form.Text className="text-muted">
                    Customer Mobile should be Unique
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formCustName" >
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" placeholder="Company Name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                </Form.Group>
                {/* </FormRow> */}
                <Button variant="success" type="submit">
                  Add Details
                </Button>
            </Form>
        )
    }
}
export default AddCustomer