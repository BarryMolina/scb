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
            <h1>Payment Success</h1>
          </header>

          <p>Thank You for your payment to St. Croix Ballet.</p>
          <p>Ms. Susan</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Covid
