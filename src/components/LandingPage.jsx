import React from 'react'
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div>
            <div>
                <h1>Coinbase Wallet</h1>
                <h3>Extension</h3>
                <p>To get started, create a new wallet or use one you already have.</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <button className="new p-3 w-75">
                    <Link className="link" to={'/new/wallet'}>Create new wallet</Link>
                </button>
                <button className="already p-3 w-75 mt-3">
                    <Link className="link2" to={'/existing/wallet'}>I already have a wallet</Link>
                </button>
            </div>
        </div>
    )
}

export default LandingPage