import { Link } from 'gatsby'
import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>St. Croix Ballet</h1>
      </header>
      <div className="content">
        <p>New Announcement: Nutcracker Suite</p>
        <ul className="actions">
          <li>
            <Link to="/nutcracker" className="button next scrolly">
              Learn More
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
