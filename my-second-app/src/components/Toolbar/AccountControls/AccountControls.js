import React from 'react';
import { connect } from 'react-redux';

import classes from './AccountControls.module.css';
import * as actions from '../../../store/actions/index';

const accountControls = (props) => {

    const checkAuthStatus = () => {
        if (!props.loggedIn) {
            props.onToggleAuthForm();
        }
    }

    return (
        <div className={!props.loggedIn ? classes.AccountControls : classes.AccountControlsActive} >
            <p onClick={checkAuthStatus}>{props.loggedIn ? props.email : 'Sign in'}</p>
            <div className={classes.dropdownContent}>
                <p onClick={props.onLogOut}>Log out</p>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        email: state.auth.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleAuthForm: () => dispatch(actions.toggleAuthForm()),
        onLogOut: () => dispatch(actions.authLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(accountControls);