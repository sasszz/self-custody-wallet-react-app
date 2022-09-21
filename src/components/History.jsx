import { useEffect, useState } from 'react';
import { ethers } from "ethers"
import { Link } from 'react-router-dom';

const History = () => {
    const address = "0xA5c19B7ACb92e8b932289a671ed256bF22e57bec"

    const getTransactionsURL = `https://api.etherscan.io/api?module=account&action=txlist&address=0xA5c19B7ACb92e8b932289a671ed256bF22e57bec&startblock=0&endblock=99999999&sort=asc&apikey=BVTZPZGUU2V3SYIF1A82PRF5MPPDWSYKGK`

    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const url = getTransactionsURL
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setTransactions(data.result);
            } catch (err) {
                console.error(err);
            }
        }
        
        getData();
    }, []);

    return (
        <div>
            <div class="row">
                <div class="col-1">
                    <Link className="link" to={'/home'}><img class="icon2" src="./public/assets/back-arrow.png" alt="Back Arrow" /></Link>
                </div>
                <div class="col d-flex justify-content-center">
                    <h6>History</h6>
                </div>
                <div class="col-1">
                </div>
            </div>
            <hr class="mt-5" />
            {transactions &&
                transactions.sort((a, b) => b.timeStamp - a.timeStamp).map((transaction, idx) => {
                    return <div key={idx} class="row d-flex justify-content-center align-items-center mt-4">
                        <div className="col-2">
                            <div class="circle d-flex justify-content-center align-items-center">
                                <img class="icon2" src="./assets/down-arrow.png" alt="Receive" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <p class="m-0">{Math.round(ethers.utils.formatEther(transaction.value)*1000000)/1000000} ETH</p>
                            </div>
                            <div class="row">
                                <p class="m-0 gray">
                                    {(transaction.from == "0xA5c19B7ACb92e8b932289a671ed256bF22e57bec") ? "Send" : "Receive" } 
                                    - {new Date(transaction.timeStamp * 1000).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                })}
        </div>
    )
}


export default History