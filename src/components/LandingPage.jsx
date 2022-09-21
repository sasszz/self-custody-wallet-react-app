import React from 'react'
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div>
            <div className="mt-5">
                <h2>Coinbase Wallet</h2>
                <p className="w-75">To get started, create a new wallet or use one you already have.</p>
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