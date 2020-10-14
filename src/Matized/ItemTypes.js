import React from 'react'
import Typography from '@material-ui/core/Typography';
import ItemData from './ItemData'

function ItemTypes({item_ava_types}) {
    return (
        <Typography>
            {
                item_ava_types.map(item_type =>
                <h6>{item_type.item_unit} {item_type.item_unit_type} {item_type.item_type} <ItemData item_sale_type={item_type.item_sale_type} /> </h6>
                    )
            }
        </Typography>
    )
}

export default ItemTypes