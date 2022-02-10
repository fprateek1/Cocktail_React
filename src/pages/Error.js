import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section-class'>
      <div className='error-container'>
        <h1>Oop! it's a Dead End</h1>
        <Link to='/' className='btn btn-primary'>
          Back home
        </Link>
      </div>
    </section>
  )
}

export default Error