import Helmet from 'react-helmet'
import Layout from '../components/layout'
import React from 'react'
import covid from '../assets/images/files/covid.jpg'
import pic11 from '../assets/images/pic11.jpg'

const Covid = props => (
  <Layout>
    <Helmet>
      <title>Covid 19 Update</title>
      <meta name="description" content="Covid 19 Info" />
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
