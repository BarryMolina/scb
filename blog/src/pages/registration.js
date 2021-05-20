import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Products from '../components/Products/Products'
import React from 'react'
import nutcrackerstudio from '../assets/images/files/nutcracker_schedule.jpg'
import pic11 from '../assets/images/pic11.jpg'
import summer from '../assets/files/summer_schedule.pdf'

const Registration = ({ data }) => (
  <Layout>
    <Helmet title="St. Croix Ballet - Registration"></Helmet>

    <div id="main" className="alt">
      <span className="image main">
        <img src={pic11} alt="" class="basicinline" />
      </span>
      <section id="one">
        <div className="inner basicbody">
          <header className="major">
            <h1>Registration</h1>
          </header>
          <h2>Summer Calendar</h2>
          <ul>
            <li>
              June 14 - August 13: Summer Session (for those not participating
              in the intensive)
            </li>
            <li>August 2 - 19: Summer Intensive (Level 1-6 and up)*</li>
            <li>
              <b>August 20: Summer Gala at Pioneer Park</b>
            </li>
          </ul>
          <p>
            We look forward to keeping you dancing over the summer. We
            anticipate a full fall schedule including Nutcracker auditions
            (September 11), Saturday rehearsals, and six Thanksgiving weekend
            performances.
          </p>
          <h2>
            August Summer Intensive Registration Information coming soon.{' '}
          </h2>
          <h4>Dates: August 2nd to August 19th. </h4>
          <u>
            <a href={summer}>
              <p>Summer Class Schedule</p>
            </a>
          </u>
          <h4>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfeSOOiskIB6fDfOmpShkxRVXganihLqzjGry79TpqA4RVJnA/viewform">
              Click here to submit your registration information, then submit
              payment below. Tuition can also be paid via check at the studio
              mailbox. There is no registration fee for summer classes.
            </a>
          </h4>
        </div>
      </section>
      <section id="2">
        <div className="inner">
          <h3>Select Your Registration Items Below</h3>
          <Products />
        </div>
      </section>
    </div>
  </Layout>
)

export default Registration
