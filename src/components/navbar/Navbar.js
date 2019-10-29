import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="hero-nav">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-three-quarters">
                                <div className="navbar-brand">
                                    <Link to="/" className="navbar-item">@juansinmiedos</Link>
                                </div>
                            </div>
                        </div>    
                    </div>
                </nav>
            </div>
        </div>
    )
}
