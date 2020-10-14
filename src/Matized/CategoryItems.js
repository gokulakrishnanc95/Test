import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ItemTypes from './ItemTypes';
// import ExpandMoreIcon from 'material-ui-icons/icons/ExpandMore';

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

export default function CategoryItems(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Typography>
            {
                props.cat_items.map(cat_items =>
                    <span key={`${cat_items.item_full_name}`}>
                        <Accordion expanded={expanded === `${cat_items.item_full_name}`} onChange={handleChange(`${cat_items.item_full_name}`)}>
                            <AccordionSummary
                                aria-controls="panel1bh-content"
                                id={`${cat_items.item_full_name}`}
                            >
                                <Typography className={classes.heading}>{cat_items.item_full_name}</Typography>
                                <Typography className={classes.secondaryHeading}>{cat_items.item_ava_types.length}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* <Typography> */}
                                    <ItemTypes item_ava_types={cat_items.item_ava_types} />
                                {/* </Typography>  */}
                            </AccordionDetails>
                        </Accordion>
                    </span>
                )
            }
        </Typography>
    )
}