import { Link } from 'gatsby'
import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>St. Croix Ballet</h1>
      </header>
      <div className="content">
        <h3>UPDATE: Secure St. Croix Ballet’s Future! — Donate Today!</h3>
        <ul className="actions">
          <li>
            <Link to="/fundraiser" className="button next scrolly">
              Read More
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
