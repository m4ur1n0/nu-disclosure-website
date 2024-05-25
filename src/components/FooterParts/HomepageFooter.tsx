import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const HomepageFooter = () => {
  return (
    <div className='homepage-footer'>
      <div className='footer-left-side'>
        <h2 className='left-side-title'>Northwestern Disclosure</h2>
        <div className='footer-left-side-social-medias'>
          <FontAwesomeIcon icon={faInstagram} className='instagram-icon' onClick={() => {
            window.open("https://www.instagram.com/nudisclosure?igsh=M3RnNGF1YXJ4M3Zn", "_blank");
          }}/>
          <FontAwesomeIcon icon={faLink} className='link-icon' onClick={() => {
            window.open("https://linktr.ee/nudivestmentcoalition", "_blank");
          }}/>
        </div>
      </div>
      <div className='footer-right-side'>
        <h2 className='footer-right-side-title'>Affiliates</h2>
        <div className='footer-affiliates'>
          <p className='footer-affiliate' onClick={() => {
            window.open("https://www.instagram.com/nu.sjp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
          }}>Northwestern Students for Justice in Palestine</p>
          <p className='footer-affiliate'>Some sort of longer affiliate</p>
        </div>
      </div>
      <div className='footer-ownership'>
        <p className='footer-copyright'><FontAwesomeIcon icon={faCopyright}/> 2024 Disclosure Group at Northwestern University</p>
        <p className='made-by-me'>site built by tm {'<'}3</p>
      </div>
    </div>
  )
}

export default HomepageFooter
