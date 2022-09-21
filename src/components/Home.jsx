import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const ethers = require('ethers');  
    const INFURA_ID = "adf6643bca5440f0883330e066d2e79c"
    const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
    const address = "0xA5c19B7ACb92e8b932289a671ed256bF22e57bec"
    const addressFront = address.slice(0,4)
    const addressBack = address.slice(39, 42)
    const addressShort = addressFront + "..." + addressBack
    
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const getBalance = async () => {
            try {
                const balance = await provider.getBalance(address);
                setBalance(Math.round(ethers.utils.formatEther(balance)*1000000)/1000000);
            } catch (err) {
                console.error(err);
            }
        }
        
        getBalance();
    }, []);

        return (
            <div>
                <div className="row mt-5">
                    <h6>{addressShort}</h6>
                    <h1>${Math.round((balance*1360.78)*100)/100}</h1>
                </div>
                <div className="row w-75 mt-5">
                    <div className="col d-flex justify-content-center">
                        <div className="circle d-flex justify-content-center align-items-center">
                            <Link to={'/send'}><img className="icon2" src="./assets/up-arrow.png" alt="Send" /></Link>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="circle d-flex justify-content-center align-items-center">
                            <Link to={'/receive'}><img className="icon2" src="./assets/down-arrow.png" alt="Receive" /></Link>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="circle d-flex justify-content-center">
                            <Link to="/history" className="link"><p className="link">...</p></Link>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="circle d-flex justify-content-center">
                            <Link to="/logout" className="link"><p className="link">x</p></Link>
                        </div>
                    </div>
                </div>
                <div className="row w-75 mt-1">
                    <div className="col d-flex justify-content-center">
                        <p>Send</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p>Receive</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p>History</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p>Logout</p>
                    </div>
                </div>
                <hr />
                <div className="row d-flex justify-content-center align-items-center mt-4">
                    <div className="col-2 d-flex align-items-center">
                        <img className="icon" src="./assets/shib-icon.PNG" alt="SHIBA INU" />
                    </div>
                    <div className="col">
                        <div className="row">
                            <p className="m-0">ETHEREUM</p>
                        </div>
                        <div className="row">
                            <p className="m-0 gray">Your balance</p>
                        </div>
                    </div>
                    <div className="col d-flex flex-column">
                        <div className="row align-self-end">
                            <h5 className="m-0 align-self-end">${Math.round((balance*1360.78)*100)/100}</h5>
                        </div>
                        <div className="row align-self-end">
                            <p className="gray m-0">{balance} ETH</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Home