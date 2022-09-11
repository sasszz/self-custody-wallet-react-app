import React, { useState } from 'react'

const Send = () => {
    const [num, setNum] = useState('0')

    const dollar = num => {
        if(num.length > 1) {
            if(num.includes(".")) {
                let shifty = num.slice(1)
                let period = shifty.indexOf('.')
                let end = period + 3
                let trunc = shifty.slice(0, end)
                document.getElementById('period').disabled = true;
                return trunc;
            }
            else {
                let shifty = num.slice(1)
                return shifty;
            }
        }
        else {
            return num;
        }
    }

        return (
            <div>
                <div class="row">
                    <div class="col-1">
                        <a href="/"><img class="icon2" src="./assets/back-arrow.png" alt="Back Arrow" /></a>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <h6>Send SHIBA INU</h6>
                    </div>
                    <div class="col-1">
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col d-flex justify-content-center align-items-center">
                        <p>Max</p>
                    </div>
                    <div class="col-8 d-flex justify-content-center">
                        <h1 class="blue main mt-2" id="input">$
                            {dollar(num)}
                        </h1>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center">
                        <img class="icon2" src="./assets/swap-arrows.png" alt="Swap" />
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center">
                        <p class="mx-3" >0.00000 SHIB</p>
                    </div>
                </div>
                <hr class="mt-5" />
                <div class="row d-flex justify-content-center align-items-center mt-4">
                    <div class="col-2 d-flex align-items-center">
                        <img class="icon" src="./assets/shib-icon.PNG" alt="SHIBA INU" />
                    </div>
                    <div class="col">
                        <div class="row">
                            <p class="m-0">SHIBA INU</p>
                        </div>
                        <div class="row">
                            <p class="m-0 gray">Your balance</p>
                        </div>
                    </div>
                    <div class="col d-flex flex-column">
                        <div class="row align-self-end">
                            <h5 class="m-0 align-self-end">$94.37</h5>
                        </div>
                        <div class="row align-self-end">
                            <p class="gray m-0">7,700,361.729 SHIB</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row mt-3"></div>
                <div class="row my-5">
                    <div class="col d-flex justify-content-center align-items-center">
                        <button 
                            className="numpad" 
                            onClick={() => setNum(num + 1)}
                        >
                            1
                        </button>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center">
                        <button className="numpad" onClick={() => setNum(num + 2)}>2</button>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center">
                        <button className="numpad" onClick={() => setNum(num + 3)}>3</button>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col d-flex justify-content-center align-items-center">
                        <button className="numpad" onClick={() => setNum(num + 4)}>4</button>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center">
                        <button className="numpad" onClick={() => setNum(num + 5)}>5</button>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center">
                        <button className="numpad" onClick={() => setNum(num + 6)}>6</button>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col d-flex justify-content-center align-items-center">
                        <button className="numpad" onClick={() => setNum(num + 7)}>7</button>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center">
                        <button className="numpad" onClick={() => setNum(num + 8)}>8</button>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center">
                        <button className="numpad" onClick={() => setNum(num + 9)}>9</button>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col d-flex justify-content-center align-items-center">
                        <button className="numpad" id="period" onClick={() => setNum(num + '.')}>.</button>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center">
                        <button className="numpad" onClick={() => setNum(num + 0)}>0</button>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center">
                        <button className="numpad"><img 
                        onClick={() => setNum(num.slice(0, -1))}
                        class="icon2" src="./assets/back-arrow.png" alt="Back Arrow" />
                        </button>
                    </div>
                </div>
                <div class="row d-flex justify-content-center align-items-center">
                    <button class="continue p-3 w-75">Continue</button>
                </div>
            </div>
        )
    }

export default Send

