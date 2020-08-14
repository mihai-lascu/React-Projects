import React from 'react';

const PortfolioBuilder = (props) => {
    return (
        <div>
            <button onClick={props.addPortfolio}>Create portfolio</button>
        </div>
    )
}

export default PortfolioBuilder;