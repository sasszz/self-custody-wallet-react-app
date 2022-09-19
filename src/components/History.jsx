import React from 'react'
import { Link } from 'react-router-dom';

const History = (props) => {
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
            <div class="row mt-3">
                <div class="col d-flex justify-content-center">
                    <h6 class="gray mt-3">Your balance</h6>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <h1>$94.37</h1>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center mb-2">
                    <h6 class="gray">7,700,361.729 SHIB</h6>
                </div>
            </div>
            <hr class="mt-5" />
            <div class="row d-flex justify-content-center align-items-center mt-4">
                <div className="col-1">
                    <div class="circle d-flex justify-content-center align-items-center">
                        <img class="icon2" src="./assets/down-arrow.png" alt="Receive" />
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <p class="m-0">SHIBA INU</p>
                    </div>
                    <div class="row">
                        <p class="m-0">Receive - July 14, 2022</p>
                    </div>
                </div>
                <div class="col d-flex flex-column">
                    <div class="row align-self-end">
                        <p class="m-0">+$34.39</p>
                    </div>
                    <div class="row align-self-end">
                        <p class="gray m-0">2,873,821.029 SHIB</p>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-center align-items-center mt-4">
                <div className="col-1">
                    <div class="circle d-flex justify-content-center align-items-center">
                        <img class="icon2" src="./assets/up-arrow.png" alt="Send" />
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <p class="m-0">SHIBA INU</p>
                    </div>
                    <div class="row">
                        <p class="m-0">Send - Dec 10, 2021</p>
                    </div>
                </div>
                <div class="col d-flex flex-column">
                    <div class="row align-self-end">
                        <p class="m-0">-$57.75</p>
                    </div>
                    <div class="row align-self-end">
                        <p class="gray m-0">4,826,540.7 SHIB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History