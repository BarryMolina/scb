import { Link } from 'gatsby'
import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>St. Croix Ballet</h1>
      </header>
      <div className="content">
        <h3>
          Fall classes begin September 7th!
        </h3>
        <ul className="actions">
          <li>
            <Link to="/registration" className="button next scrolly">
              Register Now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
