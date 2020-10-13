import Helmet from 'react-helmet'
import Layout from '../components/layout'
import React from 'react'

const Covid = props => (
  <Layout>
    <Helmet>
      <title>Nutcracker Suite 2020</title>
      <meta name="description" content="Announcing Nutcracker Suite 2020" />
    </Helmet>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Covid 19 Update</h1>
          </header>
          <p>
            St. Croix Ballet is pleased to announce that we will be performing a
            Nutcracker Suite 2020 on Thanksgiving Weekend (November 27th, 28th,
            and 29th)! It will be a shortened version of the beloved classic
            with limited seating. Check back here for ticketing information and
            performance updates.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Covid
