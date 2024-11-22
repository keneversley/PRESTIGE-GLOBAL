import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/prestigelogo.JPG'
import instagram_icon from '../Assets/instagram_icon.png'
// import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>HOME</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            
            <li>About</li>
            <li>Contact</li>
        </ul>
      
             <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a href="https://www.instagram.com/mypartygram/?igsh=ZWNuajN1aDA0M2dl" target="_blank" rel="noopener noreferrer">
                    <img src={instagram_icon} alt="Instagram Icon" />
                </a>
            </div>

            <div className="footer-icons-container">
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp_icon} alt="WhatsApp Icon" />
                </a>
            </div>
        </div>
        <div className="footer-copytight">
           <hr />
           <p>Copyright @ 2024 All Right Reserved.</p> 
        </div>
    </div>
  )
}

export default Footer
