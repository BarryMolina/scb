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
            <h2>The 30th Annual Stillwater Nutcracker</h2>
          </header> 
		 

		<h4>St. Croix Ballet will be performing the 30th Annual Stillwater Nutcracker on Thanksgiving Weekend--November 26th, 27th, and 28th at the Stillwater Area High School.  </h4>

		 

		<h4>TICKETS  for the six performances will go on sale in mid-October.</h4>

		 

		<h4>NUTCRACKER AUDITIONS at the Studio on September 11th. </h4>
        </div>
      </section>

      <img src={waltz} class="basicinline"></img>
    </div>
  </Layout>
)

export default Covid
