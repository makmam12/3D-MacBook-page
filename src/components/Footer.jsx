import React from 'react'
import { footerLinks } from '../constants'

function Footer() {
  return (
    <footer>
        <div className="info">
            <p>
                More ways to shop: Find an Apple Store or other retailer near you. Or call
            </p>
            <img src="logo.svg" alt="" />
                </div>
            <hr />
            <div className="links">
                <p>Copyright 2024 Inc. all rights reserved.</p>
                <ul>
                    {footerLinks.map(({label, link}) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))} 
                </ul>
            </div>
    </footer>
  )
}

export default Footer