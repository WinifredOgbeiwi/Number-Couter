import React from "react";
import Logo from './Logo.png'
function Header() {
  return (
  <>
  <header>
    <img src={Logo} alt="I'made Logo"/>
    <ul>
        <li>
            <a><i class="fa-brands fa-square-twitter"></i></a>
            </li>
        <li>
            <a><i class="fa-brands fa-linkedin"></i></a>
            </li>
        <li>
            <a><i class="fa-brands fa-square-twitter"></i></a>
            </li>

    </ul>
  </header>
  </>
  )
}

export default Header