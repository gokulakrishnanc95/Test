import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Murugan from '../SampleComponents/Murugan.json'
import CategoryItems from './CategoryItems'
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

export default function ShopItemsShop() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const category = Murugan;

    return (
        <div className={classes.root}>
            {
                category.map(cat => {
                    return (
                        <div key={cat.cat_id}>
                            <Accordion expanded={expanded === `${cat.cat_id}`} onChange={handleChange(`${cat.cat_id}`)}>
                                <AccordionSummary
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography className={classes.heading}>{cat.cat_name}</Typography>
                                    <Typography className={classes.secondaryHeading}>{cat.cat_items.length}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <CategoryItems cat_items={cat.cat_items} />
                                </AccordionDetails>
                            </Accordion>
                            {/* <h5 >{cat.cat_name}</h5> */}
                        </div>
                    )
                })
            }
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>General settings</Typography>
                    <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                        maximus est, id dignissim quam.
          </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}