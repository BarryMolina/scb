import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Products from '../components/Products/Products'
import React from 'react'
import nutcrackerstudio from '../assets/images/files/nutcracker_schedule.jpg'
import pic11 from '../assets/images/pic11.jpg'
import summer from '../assets/files/summer_schedule.pdf'
import schedule from '../assets/files/schedule2021.pdf'

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
              <p>Click Here for the Fall Class Schedule</p>
            </a>
          </u>
          <h3>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScZNnh2EhwwJiV_TX-dvDB6dU2Pd-xGICOkEShzI4buRobL3Q/viewform">Click here to fill out the Google form to select classes, and then pay using the form below</a>
          </h3>
          <h4>
Tuition can also be paid via check at the studio
              mailbox.
          </h4>

<h4>Tuition is due at the beginning of each quarter:</h4>
<p>First Quarter:  September 7, 2021 - October 31, 2021</p>
<p>Second Quarter:  November 1, 2021 - January 7, 2022</p>
<p>Third Quarter:   January 10, 2022 - March 11, 2022</p>
<p>Fourth Quarter:  March 14, 2022 - May 27, 2022</p>
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
