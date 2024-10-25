import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/frontend_assets/assets'
import { assets } from '../assets/frontend_assets/assets'

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="/">Luxury.io</Link>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse justify-content-center navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-3">
                                    <Link className="nav-link text-light" to="/">Home</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link text-light" to="/collection">Collection</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link text-light" to="/about">About</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link text-light" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link text-light" to="/product">Product</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link text-light" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img style={{width:'23px', cursor:'pointer'}} className='mx-2' src={assets.search_icon} alt="Search_Icon" />
                            <img style={{width:'20px', cursor:'pointer'}} className='mx-2' src={assets.profile_icon} alt="Search_Icon" />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
