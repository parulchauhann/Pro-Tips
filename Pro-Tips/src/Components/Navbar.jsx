import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
    return (
        <>
            <nav className='nav'>
                <Link to='/' className='text'>Kalvium ❤️</Link>
                <div>
                    <Link to='/Contacts' className='text'>Contacts</Link>
                    <Link to='/Reg' className='text'>Registeration Form</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar