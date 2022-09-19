import React from 'react'
import { Link } from 'react-router-dom';

const CreatePassword = () => {
    return (
        <div>
            <div class="col-1">
                <Link className="link" to={'/new/wallet'}><img class="icon2" src="./public/assets/back-arrow.png" alt="Back Arrow" /></Link>
            </div>
            <div>
                <h2>Create password</h2>
                <p>Set a password to unlock your wallet each time you use your computer. It can't be used to recover your wallet.</p>
            </div>
            <div>
                <p>Password</p>
                <input type="password" name="password" id="password" />
                <p>Confirm Password</p>
                <input type="password" name="confirm_password" id="confirm_password" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <button className="continue p-3 w-75 mt-3">
                    <Link className="link2" to={'/home'}>Submit</Link>
                </button>
            </div>
        </div>
    )
}

export default CreatePassword