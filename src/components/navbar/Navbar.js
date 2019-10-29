import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="hero is-light is-bold">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item">@juansinmiedos</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
