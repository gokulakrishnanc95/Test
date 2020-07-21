import React, {Component} from 'react'
import axios from 'axios'

class HttpGet extends Component {
    constructor(props) {
        super(props)

        this.state = {posts: [], errMessage: ''}
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error);
            this.setState({errMessage: 'error retriving data'})            
        })
    }
    render (){
        const {posts, errMessage} = this.state
        return (
            <div>
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
                {
                    errMessage ? <div>{errMessage}</div> : null
                }
            </div>
        )
    }
}
export default HttpGet