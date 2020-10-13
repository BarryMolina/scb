import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/registration">
            Registration
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/faculty">
            Staff
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/karla">
            The Karla Sweeney Foundation
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu}>
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
