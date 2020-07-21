import React, {Component} from 'react'
import LoginForm from './LoginForm'
import UserPage from './UserPage'
import './MainRender.css'

class MainRender extends Component {
    constructor (props){
        super(props)
        this.state = {
            isLoggedin: true
        }
        this.LoginFunc = this.LoginFunc.bind(this)
    }

    LoginFunc (status){
        console.log('Inside LoginFun   ' + status);
        this.setState({
            isLoggedin: status
        })
    }

    render () {
        const isLoggedin = this.state.isLoggedin
        if(isLoggedin){
            return(
                <div className="LoginRender">
                    <UserPage LoginFunc={this.LoginFunc} />
                </div>
            )
        }
        else {
            return(
                <div className="mainRender">
                    <LoginForm LoginFunc={this.LoginFunc} />
                </div>
            )
        }
    }
        
}

export default MainRender