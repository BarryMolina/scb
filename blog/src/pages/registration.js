import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Products from '../components/Products/Products'
import React from 'react'
import nutcrackerstudio from '../assets/images/files/nutcracker_schedule.jpg'
import pic11 from '../assets/images/pic11.jpg'
import summer from '../assets/files/summer_schedule.pdf'
import schedule from '../assets/files/schedule2021.docx'

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
          <u>
            <a href={schedule}>
              <p>Fall Registration</p>
            </a>
          </u>
          <h4>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfeSOOiskIB6fDfOmpShkxRVXganihLqzjGry79TpqA4RVJnA/viewform">
              Click here to submit your registration information, then submit
              payment below. Tuition can also be paid via check at the studio
              mailbox.
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
