import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import main from '../wallet/02_restoreWallet'

const ExistingWallet = () => {
    const [secret, setSecret] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    let secretSuccess = () => {
        main(secret)
            .then(() => {
                navigate('/home');
            })
            .catch((err)=>{
                console.log(err)
                setError(err.message)
            })
    }


    return (
        <div>
            <div class="col-1">
                <Link className="link" to={'/'}><img class="icon2" src="./public/assets/back-arrow.png" alt="Back Arrow" /></Link>
            </div>
            <div>
                <h2>Import wallet</h2>
                <p>Enter your wallet’s 12 word recovery phrase (also called a seed phrase). You can import any Ethereum wallet.</p>
            </div>
            <div className="row">
                <input value={secret} onChange={(e) => setSecret(e.target.value)} type="text" name="secret"/>
                <Link to={'https://www.coinbase.com/wallet/getting-started-extension#import-existing-wallet'}>Where can I find it?</Link>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <button onClick={() => secretSuccess()} className="continue p-3 w-75">
                    Import Wallet
                </button>
                {error &&
                    <p>{error}</p>
                }
            </div> 
        </div>
    )
}

export default ExistingWallet

