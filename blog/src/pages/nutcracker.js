import Helmet from 'react-helmet'
import Layout from '../components/layout'
import React from 'react'
import waltz from '../assets/images/waltz.jpg'

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
            <h2>Nutcracker Suite 2020</h2>
            <h3>November 18th Update</h3>
          </header>
           <p>Dear Friends and Families of St. Croix Ballet,</p>
          <p>
            While it was our hope to present a live shortened version (with
            limited seating) of the Nutcracker Suite Thanksgiving weekend, the
            recent spikes of Covid-19 and the additional directives from the
            Governor and the school district does not allow us to perform  live.
            We will, however, be taping a show over the Thanksgiving holiday
            which we will make available as a streaming event for the Christmas
            season. We will let you know when the link becomes available.
          </p>
           
          <p>
            Thank you all for your understanding during this time of difficult
            decisions and your continued support of St. Croix Ballet.
          </p>
           <p>A happy Thanksgiving to all.</p> <p>Ms. Susan</p>
        </div>
      </section>

      <img src={waltz} class="basicinline"></img>
    </div>
  </Layout>
)

export default Covid
