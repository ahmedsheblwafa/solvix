import React from 'react'
import style from './TopBar.module.scss'

export default function TopBar() {
  return (
    <div className={`${style.topBar}`}>
        <div className="container">
            <div className={`${style.content}`}>
        <div className={`${style.text}`}>
            <h3>Solvix</h3>
        </div>
        <div className={`${style.social}`}>
            <a
              href="/"
              target={`_blank`}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/" target={`_blank`}>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="/"
              target={`_blank`}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="/"
              target={`_blank`}
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="/"
              target={`_blank`}
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
            </div>
          </div>
    </div>
  )
}
