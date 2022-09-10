import React from 'react'
import Counter from './Counter'
import CounterButton from './CounterButton'

const Send = () => {
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
                    <Counter />
                    {/* <h1 class="blue main mt-2" id="input">$0</h1> */}
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
                    <CounterButton />
                    <h4>1</h4>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <h4>2</h4>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <h4>3</h4>
                </div>
            </div>
            <div class="row my-5">
                <div class="col d-flex justify-content-center align-items-center">
                    <h4>4</h4>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <h4>5</h4>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <h4>6</h4>
                </div>
            </div>
            <div class="row my-5">
                <div class="col d-flex justify-content-center align-items-center">
                    <h4>7</h4>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <h4>8</h4>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <h4>9</h4>
                </div>
            </div>
            <div class="row my-5">
                <div class="col d-flex justify-content-center align-items-center">
                    <h4>.</h4>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <h4>0</h4>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <img class="icon2" src="./assets/back-arrow.png" alt="Back Arrow" />
                </div>
            </div>
            <div class="row d-flex justify-content-center align-items-center">
                <button class="continue p-3 w-75">Continue</button>
            </div>
        </div>
    )
}

export default Send