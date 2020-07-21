import React, {Component} from 'react'

class ForClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            HandleName: 'Your name will appeare here'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            HandleName: this.props.name
        })
    }
    render(){
        return(
            <div>
            <h1>Inside Class Component {this.props.name}</h1>
            <button onClick = {this.handleClick}> Click Me to view your name</button>
            <h1>{this.state.HandleName}</h1>
            {this.props.children}
            </div>
        )
    }
}
export default ForClass