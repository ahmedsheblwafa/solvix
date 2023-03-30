import React, { useState } from 'react'
import style from './MobNav.module.scss'

export default function MobNav() {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
      setisOpen(!isOpen);
    };
  return (
    <>
    <div className={`${style.mobNav}`}>
  <div className={`${style.mobLeft}`}>
          <div className={`${style.logo}`}>
            <img src="images/logo.png" alt="logo" />
          </div>
        </div>
        <div className={`${style.mobRight}`}>
          <div className={`${style.icon}`}>
            <i className="fa-solid fa-bars" onClick={toggle}></i>
          </div>
        </div>
    </div>





    <div
        className={`${style.mobBar}`}
        style={{
          height: isOpen ? " 100%" : "0px",
          padding: isOpen ? " 10px 20px" : "0px 20px",
          transition: "all 0.3s ease",
        }}
      >
         <div
          className={`${style.head}`}
          style={{
            display: isOpen ? " flex" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <div className={`${style.logo}`}>
            {" "}
            <img src="images/logoLight.png" alt="logo" />
          </div>
          <div className={`${style.center}`}>

          </div>
          <div className={`${style.icon}`}>
            <i className="fa-solid fa-xmark" onClick={toggle}></i>
          </div>
        </div>


        <div
          className={`${style.body}`}
          style={{
            display: isOpen ? " block" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <div className={`${style.item}`}>
            <a href="/" className={`${style.links} nav-link`}>
              Home
            </a>
          </div>
          <div className={`${style.item}`}>
            <a href="/" className={`${style.links} nav-link`}>
              Company
            </a>
          </div>
          <div className={`${style.item}`}>
            <a href="/" className={`${style.links} nav-link`}>
              Products
            </a>
          </div>
          <div className={`${style.item}`}>
            <a href="/" className={`${style.links} nav-link`}>
              Services
            </a>
          </div>
          <div className={`${style.item}`}>
            <a href="/" className={`${style.links} nav-link`}>
              Contacts
            </a>
          </div>
       
        
          
         
        </div>
      </div>
    </>

    
  )
}
