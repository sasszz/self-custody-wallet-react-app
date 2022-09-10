import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Receive from './components/Receive'
import Send from './components/Send'
import History from './components/History'

import './style.css'

const App = () => {
  return (
    <div className="body">
      <div className="contain p-5 my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receive" element={<Receive />} />
          <Route path="/send" element={<Send />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  )
}

export default App