import React, {Component} from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: "Hellow Parent"
        }
        this.HandleClick = this.HandleClick.bind(this)
    }
    
    HandleClick (message){
        this.setState({
                message: message
        })
        //alert(message)

    }

    showAlert (){
        alert(this.state.message)
    }

    render(){
        return(
            <div>
                <h1>This is inside Parent</h1>
                <h2>{this.state.message}</h2>
                <ChildComp clickHandler = {this.HandleClick} />
            </div>
        )
    }
}
export default ParentComp