import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {

  const {userId} = useParams();
  
  return (
    <div className='container'>
        <h1>this is user {userId} detail page</h1>
    </div>
  )
}
