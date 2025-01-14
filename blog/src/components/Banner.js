import { Link } from 'gatsby'
import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>St. Croix Ballet</h1>
      </header>
      <div className="content">
        <h3>The 30th Annual Stillwater Nutcracker</h3>
        <ul className="actions">
          <li>
            <Link to="/nutcracker" className="button next scrolly">
              Buy your tickets TODAY!
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
