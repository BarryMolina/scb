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
            Dear St. Croix Ballet Families: During this unprecedented time of
            Covid-19, St. Croix Ballet continues to offer classes both in person
            and via Zoom. Like all schools and businesses, we are subject to the
            directives of the Governor as well as to the Stillwater Area School
            District (regarding theater use). To that end, we have smaller class
            sizes to accommodate social distancing, require masks, and have
            other measures in place, which is outlined in our{' '}
            <a href={covid}> Covid-19 Health and Safety Plan.</a> Please check
            back here for periodic Covid-19 Updates. Thank you for being a part
            of the St. Croix Ballet Family.
          </p>
          <p>Ms. Susan</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Covid
