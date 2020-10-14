import React, { useState } from 'react'
import ItemsShow from './ItemsShow'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Murugan from '../SampleComponents/Murugan.json'

export default function CategoryShow() {
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
    }))
    const classes = useStyles();
    const categorys_list = Murugan;
    const [expanded, setExpanded] = useState('1');

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
                categorys_list.map((category, index) => {
                    return (
                        <div key={`${category.category_id}`} >
                            <button
                                value={`${category.category_id}`}
                                onClick={handleChange}
                            >
                                {category.category_name}
                            </button>
                            {
                                expanded === category.category_id ?
                                    <ItemsShow
                                        //key={`${category.category_id}index`} 
                                        category_items={category.category_items}
                                    /> :
                                    ''
                            }
                        </div>
                    )
                    /*<Accordion key={`${category.category_id}`} expanded={expanded === `${category.category_id}`} onChange={handleChange(`${category.category_id}`)}>
                        <AccordionSummary
                            aria-controls="panel1bh-content"
                            id={`${category.category_id}`}
                        >
                            <Typography className={classes.heading}>{category.category_name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ItemsShow key={`${category.category_id}index`} category_items={category.category_items} />
                             //<CategoryItems category_items={category.category_items} />
                        </AccordionDetails>
                    </Accordion> */
                })
            }
        </>
    )
}

// export default categoryShow