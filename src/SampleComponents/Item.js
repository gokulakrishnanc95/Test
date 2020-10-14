import React from 'react'
import './Item.css'
import Alert from './Alert'

class Item extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            alert: false,
            toggle: false
        }
    }

    handleChange = e => {
        this.props.onChange(this.props.item, e.target.value)
    }

    handleClick = (e) => {
        this.setState({ toggle: !this.state.toggle });
    }

    handleAlert = (Res) => {
        Res ? this.props.onRemove(this.props.item) : this.setState({ alert: !this.state.alert });
        this.setState({ alert: !this.state.alert });
    }

    render() {
        return (
            <div className="posi line">
                <h3
                    className="posi line"
                    onClick={this.handleClick}
                >
                    {this.props.item.name} {this.state.toggle ? '>' : '^'}
                </h3>
                {
                    this.state.toggle ?
                        <div>
                            <label>
                                <b>{(this.props.item.name).toUpperCase()}</b>
                            </label>
                            <button
                                className="delete general"
                                type="button"
                                onClick={() => this.props.onDecreament(this.props.item)}
                            >
                                -
                            </button>
                            <input
                                className="general input"
                                type="text"
                                onChange={this.handleChange}
                                value={this.props.item.value}
                            />
                            <button
                                className="plus general"
                                type="button"
                                onClick={() => this.props.onIncreament(this.props.item)}
                            >
                                +
                            </button>
                            {
                                this.props.item.value ?
                                    <button
                                        className="delete general button"
                                        type="button"
                                        onClick={() => { this.handleAlert(false) }}
                                    >
                                        Reset
                            </button>
                                    : ''
                            }
                            {
                                this.state.alert ? (
                                    <Alert>
                                        <p>Are You Sure You Want to Reset Value of <b>{this.props.item.name.toUpperCase()}</b></p>
                                        <button className="delete general button" onClick={() => { this.handleAlert(true) }}>Yes</button>
                                        <button className="plus general button" onClick={() => { this.handleAlert(false) }}>Close</button>
                                    </Alert>) :
                                    null
                            }
                        </div>
                        :
                        ''
                }

            </div>
        )
    }
}


export default Item