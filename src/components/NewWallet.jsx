import React from 'react'
import { Link } from 'react-router-dom';

const NewWallet = () => {
    return (
        <div>
            <div class="col-1">
                <Link className="link" to={'/'}><img class="icon2" src="./public/assets/back-arrow.png" alt="Back Arrow" /></Link>
            </div>
            <div>
                <h2>Backup your wallet</h2>
                <p> Save these 12 words to a password manager, or write down and store in a secure place. Do not share with anyone.</p>
            </div>
            <div>
                <p id="secret-phrase"></p>
                <p>Copy to clipboard</p>
            </div>
            <div className="row">
                <div className="col-1"><input type="checkbox" name="confirmation" id="confirmation" /></div>
                <div className="col">
                    <p>I understand that if I lose my recovery phrase, I'll lose all of the crypto in my wallet.</p>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <button className="continue p-3 w-75">
                    <Link className="link" to={'/home'}>Continue</Link>
                </button>
            </div>
        </div>
    )
}

export default NewWallet