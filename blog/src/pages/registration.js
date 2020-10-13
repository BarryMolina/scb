import Checkout from '../components/Products/Checkout'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Products from '../components/Products/Products'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import chapelstudio from '../assets/images/files/chapel_schedule.jpg'
import covid from '../assets/images/files/covid.jpg'
import { graphql } from 'gatsby'
import nutcrackerstudio from '../assets/images/files/nutcracker_schedule.jpg'
import pic11 from '../assets/images/pic11.jpg'

const Registration = ({ data }) => (
  <Layout>
    <Helmet></Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Registration</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <h2>Register for Fall 2020 Here</h2>
          <u>
            <a href={covid}>
              <p>SCB Health and Safety Plan</p>
            </a>
            <a href={chapelstudio}>
              <p>Chapel Studio Schedule </p>
            </a>
            <a href={nutcrackerstudio}>
              <p>Nutcracker Studio Schedule</p>
            </a>
          </u>
          <h4>
            New students and families, please email SCB for enrollment
            availability and placement information at{' '}
            <a href="mailto:stcroixballet@gmail.com">stcroixballet@gmail.com</a>
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

export const pageQuery = graphql`
  query Banner {
    allStrapiRegistrationPage {
      edges {
        node {
          content
        }
      }
    }
  }
`
