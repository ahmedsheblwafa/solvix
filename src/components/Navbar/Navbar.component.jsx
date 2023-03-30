import React from 'react'
import style from './Navbar.module.scss'

export default function Navbar() {
    return (
        <div className={`${style.listItems}`}>
            <a href="/" className="nav-link">
                <span>Home</span>
            </a>
            <a href="#company" className="nav-link">
                <span>Company</span>
            </a>
            <a href="/" className="nav-link">
                <span>Products</span>
            </a>
            <a href="/" className="nav-link">
                <span>Services</span>
            </a>
            <a href="/" className="nav-link">
                <span>Contact</span>
            </a>
        </div>
    )
}
