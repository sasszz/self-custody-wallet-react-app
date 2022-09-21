import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { restoreWallet, walletAddress } from '../wallet/02_restoreWallet'
import axios from 'axios';

const ExistingWallet = () => {
    const [secret, setSecret] = useState("");
    const navigate = useNavigate();
    const [incorrectSecret, setIncorrectSecret] = useState(null);
    const [errors, setErrors] = useState([]);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/register', {
            secret,
            password,
            confirmPassword,
            address
        })
            .then(() => {
                navigate('/home');
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }


    let secretSuccess = () => {
        restoreWallet(secret)
            .then(() => {
                setIncorrectSecret(null)
                setAddress(walletAddress)
            })
            .catch((err) => {
                setIncorrectSecret(err.message)
            })
    }


    return (
        <div>
            <div className="col-1">
                <Link className="link icon2" to={'/'}><img src="./public/assets/back-arrow.png" alt="Back Arrow" /></Link>
            </div>
            <div className="mt-1">
                <h2>Import wallet</h2>
                <p className="w-75 subtext">Enter your wallet’s 12 word recovery phrase (also called a seed phrase). You can import any Ethereum wallet.</p>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className="row mt-3">
                    <input onBlur={() => secretSuccess()} className="form-control" value={secret} onChange={(e) => setSecret(e.target.value)} type="text" name="secret" />
                    <Link className="mt-2" to={'https://www.coinbase.com/wallet/getting-started-extension#import-existing-wallet'}>Where can I find it?</Link>
                </div>
                {incorrectSecret &&
                    <p>{incorrectSecret}</p>
                }
                <div className="mt-5">
                    <h2>Create password</h2>
                    <p className="w-75 subtext">Set a password to unlock your wallet each time you use your computer. It can't be used to recover your wallet.</p>
                </div>
                <div>
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <label className="form-label mt-3" htmlFor="confirm_password">Confirm Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                    />
                    <input type="hidden" name="address" 
                        value={address}
                    />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                    <button className="continue p-3 w-75 mt-3" type="submit">Submit</button>
                </div>
            </form>
            {errors &&
                errors.map((error, idx) => {
                    return <p key={idx}>{error}</p>;
                })}
        </div>
    )
}

export default ExistingWallet

