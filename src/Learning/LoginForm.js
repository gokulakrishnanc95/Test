import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import FormRow from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginForm.css'

class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            uname: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (event){
        const uname = '123'
        const password = '123'
        let status = false
        if(uname === this.state.uname && password === this.state.password){
            status = true
            this.props.LoginFunc(status)
        }
        else{
            status = true
            alert("Invalid Credentials")
            event.preventDefault()
        }
    }

    render(){
        return (
          <div className="LoginForm">
            <Form onSubmit={this.handleSubmit}>
                <FormRow>
                <Form.Group controlId="formmobilenumber" onChange={(event) => this.setState({uname: event.target.value})} width='10px'>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="Mobile Number" />
                  <Form.Text className="text-muted">
                    We'll never share your data with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" onChange={(event) => this.setState({password: event.target.value})}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                </FormRow>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="success" type="submit">
                  Login
                </Button>
            </Form>
            </div>
            // <form>
            // <div>
            //     <label>Username</label>
            //     <input type='text' value = {uname} onChange={(event) => this.setState({uname: event.target.value})}/>
            // </div>
            // <div>
            //     <label>Password</label>
            //     <input type='password' value = {password} onChange={(event) => this.setState({password: event.target.value})} />
            // </div>
            // <div>
            //     <button type="submit" onClick={this.handleSubmit}>Login</button>
            // </div>
            // </form>
        )
    }
}
export default LoginForm