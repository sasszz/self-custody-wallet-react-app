import React from 'react'
import { Link } from 'react-router-dom';

const Receive = () => {
    return (

        <div>
            <div class="row">
                <div class="col-1">
                    <Link className="link" to={'/home'}><img class="icon2" src="./public/assets/back-arrow.png" alt="Back Arrow" /></Link>
                </div>
                <div class="col d-flex justify-content-center">
                    <h6>Receive SHIBA INU</h6>
                </div>
                <div class="col-1">
                </div>
            </div>
            <div class="row mt-5">
                <div class="col d-flex justify-content-center">
                    <h6 class="gray mt-5">Your Ethereum address</h6>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center mb-4">
                    <h3 class="mx-3">0x...a540e22</h3>
                    <img class="icon3" src="./assets/copy-icon.png" alt="Copy" />
                </div>
            </div>
            <hr class="mt-5" />
        </div>
    )
}

export default Receive