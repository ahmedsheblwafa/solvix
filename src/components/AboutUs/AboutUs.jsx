import React from 'react'
import style from './AboutUs.module.scss'

export default function AboutUs() {
  return (
    <div className={`${style.about}`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
      <div className={`${style.item}`}>
      <div className={`${style.itemBorder}`}>
      <div className={`${style.img}`}>
            <div className= {`${style.overlay}`}>
              <ul>
                <li><i className="fa-brands fa-facebook-f" /></li>
                <li><i className="fa-brands fa-twitter" /></li>
                <li><i className="fa-brands fa-instagram" /></li>
                <li><i className="fa-brands fa-google" /></li>
              </ul>
            </div>
          </div>
  
      </div>
      </div>
        </div>
        <div className="col-lg-8">
          <div className={`${style.aboutTitle}`}>
          <h2 className='mb-5'>About <span>Solvix</span></h2>
          <p className='mb-5'>
          Since 2009, our company has a successful business experience and knowledge in the sector of chemical trading and manufacturing.Our mission is to pursue global developments and innovations,to practice the best options, to respect the environment and human health,to be the leading firm in the sector with the principle of reliability.
       </p>
          </div>
  
        </div>
      </div>
    </div>
  
  </div>
  )
}
