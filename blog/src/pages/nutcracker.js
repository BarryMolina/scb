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

          <button>
            <a href="https://ci.ovationtix.com/35795/production/1083769">
              Buy Your Tickets Today!
            </a>
          </button>
          <p></p>
          <p>
            The Stillwater Nutcracker, now celebrating its thirtieth year, is a
            family-friendly version of the classic ballet, choreographed to the
            music of Tchaikovsky, and follows the traditional storyline of the
            young girl named Clara and her Christmas dream.
          </p>
          <p>
            Our version includes a live narration and the exuberant dancing of
            children from the age of five through professional level dancers who
            grace the show with beauty and spirit.{' '}
          </p>
          <p>
            2021 Nutcracker Performances will be held at the Stillwater Area
            High School Auditorium: Friday, November 26th at 2:00 pm and 7:00 pm
            Saturday, November 27th at 2:00 pm and 7:00 pm Sunday, November 28th
            at 1:00 pm and 6:00 pm Tickets for the 2021 Nutcracker are $22.00
            each All seats are reserved.
          </p>
          <p>
            Please note that all ticket holders ages 5 and above are required to
            wear a mask and follow all COVID safety protocols.
          </p>
          <button>
            <a href="https://ci.ovationtix.com/35795/production/1083769">
              Buy Your Tickets Today!
            </a>
          </button>
          <p></p>
        </div>
      </section>

      <img src={waltz} class="basicinline"></img>
    </div>
  </Layout>
)

export default Covid
