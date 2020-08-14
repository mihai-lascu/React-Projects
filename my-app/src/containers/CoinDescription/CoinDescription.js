import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import CryptoNews from '../../components/CryptoNews/CryptoNews';
import CryptoArticle from '../../components/CryptoArticle/CryptoArticle';

class CoinDescription extends Component {

    componentDidMount = () => {
        this.props.onFetchCryptoNews(this.props.match.params.symbol.toLowerCase());
    }

    getResources = () => {
        let resources = null;
        let info = null;

        this.props.cryptoData.forEach(crypto => {
            if (crypto.symbol.toUpperCase() === this.props.match.params.symbol) {
                resources = crypto.resources
            }
        })

        if (resources) {
            info = resources.map(resource => (
                <p key={resource.url}><a href={resource.url}>{resource.name}</a></p>
            ));
        } else {
            info = <p>No resources available</p>;
        }

        return info;
    }

    render() {
        let article = null;
        let cryptoNews = null;

        if (this.props.cryptoData) {
            article = <CryptoArticle symbol={this.props.match.params.symbol} getResources={this.getResources}/>;
        } else {
            this.props.history.push('/');
        }

        if (this.props.cryptoNews) {
            cryptoNews = this.props.cryptoNews.map(news => {
                return (
                    <CryptoNews
                        key={news.id}
                        title={news.title}
                        content={news.content}
                        author={news.author}
                        url={news.url}
                    />
                )
            })
        }

        return (
            <Fragment>
                {article}
                {cryptoNews}
            </Fragment >
        )
    }
}

const mapStateToProps = state => {
    return {
        cryptoData: state.crypto.cryptoData,
        cryptoNews: state.news.cryptoNews
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCryptoNews: (symbol) => dispatch(actions.fetchCryptoNews(symbol))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinDescription);
