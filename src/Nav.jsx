import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    return (
        <div className='nav'>
            <div className="nav-container">
                <Link className='nav-logo'>
                <h1>MODELKOS</h1>
                </Link>
                <div className="nav-menu">
                    <div className="nav-link">
                        <Link>Home</Link>
                    </div>
                    <div className="nav-link">
                        <Link>Our Work</Link>
                    </div>
                    <div className="nav-link">
                        <Link>About Us</Link>
                    </div>
                    <div className="nav-link">
                        <Link>Models</Link>
                    </div>
                    <div className="nav-link">
                        <Link>Academy</Link>
                    </div>
                    <div className="nav-link">
                        <Link>Blog</Link>
                    </div>
                </div>
                <div className="nav-auth">
                    <div className="auth-link">
                        <Link><p>Apply now</p></Link>
                    </div>
                    <div className="auth-contact">
                        <Link><p>Contacts</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav