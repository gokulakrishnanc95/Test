import React from 'react'
import ItemTypeShow from './ItemTypeShow'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

function ItemsShow({ category_items }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }));

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('false');

    const handleChange = (event) => {
        if (event.target.value === expanded) {
            setExpanded('false');
        }
        else {
            setExpanded(event.target.value);
        }
    };

    return (
        <>
            {
                category_items.map(items => {
                    return (
                        <div className="container" key={`${items.items_id}`} >
                            <button
                                value={`${items.items_id}`}
                                onClick={handleChange}
                            >
                                {items.items_full_name}
                            </button>
                            {
                                expanded === items.items_id ? <ul>
                                    {
                                        items.items_types.map(item => {
                                            return (
                                                <li
                                                    key={`${item.item_code}`}
                                                >
                                                    {item.item_unit} {item.item_unit_type} {item.item_type} 
                                                    <ItemTypeShow 
                                                        item_sale_type={item.item_sale_type}
                                                        item_code = {item.item_code}
                                                     />
                                                </li>
                                            )
                                        })
                                    }
                                    <hr />
                                </ul> :
                                    ''
                            }
                        </div>
                    )
                })

            }
            {/* {
                category_items.map(items => {
                    return <Accordion key={`${items.items_id}`} expanded={expanded === `${items.items_id}`} onChange={handleChange(`${items.items_id}`)}>
                        <AccordionSummary
                        aria-controls="panel1bh-content"
                            id={`${items.items_id}`}
                        >
                            {console.log({items})}
                            <Typography className={classes.heading}>{items.items_full_name}this</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            //<ItemTypeShow items_types={items.items_types} />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                })
            } */}
        </>
    )
}

export default ItemsShow
