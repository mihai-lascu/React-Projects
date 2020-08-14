import React, { Fragment } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Model.module.css';

const Model = (props) => {
    return (
        <Fragment>
            <Backdrop show={props.showForm} clicked={props.showBackdrop}/>
            <div
                className={classes.Model}
                style={{
                    transform: props.showForm ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.showForm ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Fragment>
    )
}

export default Model;
