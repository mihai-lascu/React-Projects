import Link from 'next/link';
import Router from 'next/router';
import React, { Component } from 'react'

export class IndexPage extends Component {
    // static async getInitialProps(context) {
    //     console.log(context);
    //     return {appName: 'Super App'};
    // }

    static getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: 'Super App'});
            }, 1000);
        });
        return promise;
    }

    render() {
        return (
            <div>
                <h1>The Main Page of {this.props.appName}</h1>
                <p> Go to <Link href='/auth'><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>Go to Auth</button>
            </div>
        )
    }
}

export default IndexPage;