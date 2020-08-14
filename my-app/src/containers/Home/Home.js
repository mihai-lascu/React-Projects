import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import CryptoTable from '../../components/CryptoTable/CryptoTable';
import classes from './Home.module.css';

export class Home extends Component {

    componentDidMount = () => {
        this.props.onFetchCryptoData();
    }

    render() {
        return (
            <Fragment>
                <div className={classes.Home}>
                    <h2>Top 20 Crypto List</h2>
                    <CryptoTable />
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCryptoData: () => dispatch(actions.fetchCryptoData())
    };
};

export default connect(null, mapDispatchToProps)(Home);
