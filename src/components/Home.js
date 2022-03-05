import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

    return (
      <div className='container'>
        <h1>This is home page</h1>
        {/* <button onClick={() => navigate('order-summary', { replace: true})}>Place order</button> */}
        <button onClick={() => navigate('order-summary')}>Place order</button>
      </div>
    )
}
