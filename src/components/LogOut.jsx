import React from 'react'
import { Link } from 'react-router-dom';

const LogOut = () => {
    return (
        <div>
            <div className="col-1">
                <Link className="link icon2" to={'/home'}><img src="./public/assets/back-arrow.png" alt="Back Arrow" /></Link>
            </div>
            <div>
                <h2>Are you sure?</h2>
                <p> After you sign out, you’ll need to enter your 12 word recovery phrase if you want to use your wallet again. </p>
                <p>You can also sign out and create a new wallet or import an existing wallet.</p>
                <p>Do NOT sign out if you don't know your recovery phrase.</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <button className="logout p-3 w-75">
                    <Link className="logout-link" to={'/'}>Sign Out</Link>
                </button>
            </div>
        </div>
    )
}

export default LogOut