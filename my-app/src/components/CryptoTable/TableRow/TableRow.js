import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './TableRow.module.css';

const tableRow = (props) => {
    return (
        <tr className={classes.TableRow}>
            <td>{props.nr}</td>
            <td><NavLink to={`${props.symbol}`}><strong>{props.name}</strong></NavLink></td>
            <td>{props.marketCap}</td>
            <td>{props.price}</td>
            <td>{props.volume}</td>
            <td>{`${props.supply} ${props.symbol}`}</td>
        </tr>
    )
};

export default tableRow;
