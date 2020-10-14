import React, { Component } from 'react'
import ItemSelection from './ItemSelection'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);




export class ItemData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item_sale_on_type: '',
            item_sale_on_type_price: '',
            min_quantity: '',
            count: ''
        }
    }

    useStyles = () => makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));

    componentDidMount() {
        this.setState({
            item_sale_on_type: this.props.item_sale_type[0].item_sale_on_type,
            item_sale_on_type_price: this.props.item_sale_type[0].item_sale_on_type_price,
            min_quantity: this.props.item_sale_type[0].min_quantity,
            count: this.props.item_sale_type[0].min_quantity
        })
    }

    handleChange = (event) => {
        // setcount(event.target.value);
        // let price;
        // let quan;
        const index = this.props.item_sale_type.map((sale_type, index) =>
            sale_type.item_sale_on_type === event.target.value ? (
                this.setState({
                    item_sale_on_type: event.target.value,
                    item_sale_on_type_price: sale_type.item_sale_on_type_price,
                    min_quantity: sale_type.min_quantity,
                    count: sale_type.min_quantity <= this.state.count ? this.state.cout : sale_type.min_quantity
                })
            ) :
                '');
        // const price = this.props.item_sale_type[index].item_sale_on_type_price;
        // const quan = this.props.item_sale_type[index].min_quantity;
        // this.setState({ 
        //     item_sale_on_type: event.target.value,
        //     item_sale_on_type_price: price,
        //     min_quantity: quan
        //  })
    };

    handleCount = (event) => {
        const count = event.target.value >= this.state.min_quantity ? event.target.value : this.state.min_quantity;
        this.setState({ count: count });
    }

    render() {
        const classes = this.useStyles;
        const { item_sale_on_type, item_sale_on_type_price, min_quantity, count } = this.state
        return (
            <div>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor={`${item_sale_on_type}-count`}>Count</InputLabel>
                    <BootstrapInput id={`${item_sale_on_type}-count`} onChange={this.handleCount} value={count} />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel id={`${item_sale_on_type}-demo-customized-select-label`}>Unit Type</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id={`${item_sale_on_type}-demo-customized-select`}
                        value={item_sale_on_type}
                        onChange={this.handleChange}
                        input={<BootstrapInput />}
                    >
                        {this.props.item_sale_type.map(sale_type =>
                            <MenuItem key={sale_type.item_sale_on_type} value={sale_type.item_sale_on_type}>{sale_type.item_sale_on_type.toUpperCase()}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl className={classes.margin}>
                    <BootstrapInput value={item_sale_on_type_price * count} />
                </FormControl>
            </div>
        )
    }
}

export default ItemData
