import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/StCroixBallet/"
            className="icon alt fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/stcroixballet/"
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy;St. Croix Ballet</li>
        <li>Website by Roerick Sweeney</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
        <li>
          Photos by{' '}
          <a href="http://www.rachel-desjardins.com">Des Jardins Studio</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
