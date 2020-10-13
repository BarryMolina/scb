import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>St. Croix Ballet</strong>{' '}
      <span>Classical Training at its finest</span>
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu}>
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
