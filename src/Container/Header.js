import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand'>Restaurent</a>
            <button className='btn btn-primary'>
            Orders <span className='badge bg-secondary'>0</span>
            </button>

        </nav>
      
    </div>
  )
}

export default Header
