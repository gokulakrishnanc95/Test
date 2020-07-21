import React, {Component, PureComponent} from 'react'
import RegComp from './RegComp'
import PureComp from './PureComponent'

class ParentComp extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            name: 'GK'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'GKS'
            })
        }, 5000)
    }

    render(){
        console.log('***************Parent Component**************');
        
        return(
            <div>
                Parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}
export default ParentComp