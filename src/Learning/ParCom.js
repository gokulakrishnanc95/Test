import React, {Component} from 'react'
import MemoComp from '../MemoComp';

class ParCom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'GK'
        }
    }

    // componentDidMount(){
    //     setInterval(() => {
    //         this.setState({
    //             name: 'GK'
    //         })
    //     }, 2000);
    // }

    render() {
        console.log('**********Parent Component')
        return(
            <div>
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}
export default ParCom