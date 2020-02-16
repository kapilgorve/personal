import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = () => {
  if (typeof window === 'undefined') {
    return null
  }
    window.omnisend = window.omnisend || [];
    omnisend.push(["accountID", "5e48d82d4c7fa47e7cb56127"]);
    omnisend.push(["track", "$pageViewed"]);
    !function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisrc.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();

  <nav className="navbar">
    <Link to="/" className="navbar-brand">
      Home
    </Link>
    <Link to="/blog" className="navbar-brand">
      Blog
    </Link>
    <Link to="/portfolio" className="navbar-brand">
      Portfolio
    </Link>
    <Link to="/resume" className="navbar-brand">
      Resume
    </Link>
  </nav>
}

export default Header
