import React from 'react'
import style from './Navbar.module.scss'

export default function Navbar() {
    return (
        <div className={`${style.navbar}`}>
            <div className="container">
                <div className={`${style.content}`}>
                    <div className={`${style.img}`}>
                        <img src="images/logo.png" alt="logo" />
                    </div>

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
                </div>
            </div>
        </div>
    )
}
