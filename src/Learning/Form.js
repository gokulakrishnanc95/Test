import React, {Component} from 'react'

class Form extends Component{
    constructor (props){
        super(props)
        this.state = {
            username: '',
            comments: '',
            toipc: ''
        }
        
    }
    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleUserCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render(){
        const {username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <lable>Username</lable>
                <input type='text' value = {username} onChange={this.handleUserNameChange}/>
            </div>
            <div>
                <lable>Comments</lable>
                <textarea value={comments} onChange={this.handleUserCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
            </form>
        )
    }
}
export default Form