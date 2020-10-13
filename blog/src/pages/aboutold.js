import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Contact from '../components/Contact'
import pic11 from '../assets/images/pic11.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>St. Croix Ballet: About</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About Our Studio</h1>
          </header>
          <span className="image right">
            <img src={pic11} alt="" />
          </span>

          <p>
            St. Croix Ballet is one of the Twin Cities&#39; top ballet and dance
            studios. We offer a ballet-focused classical training program
            utilizing the Vagonova method.
          </p>

          <p>
            St. Croix Ballet's students have been accepted into some of the
            nation's top dance programs including Royal Winnipeg Ballet, Alvin
            Alley American Dance Theater, Indiana University Dance, Joffrey
            Ballet, Ballet Austin, Milwaukee Ballet, Bossov Ballet, Gelsey
            Kirkland Academy and numerous others. Our students are often invited
            by the schools to stay year round. But each year all students return
            in time (early August) to take St. Croix Ballet's three-week Summer
            Intensive! In short, St. Croix Ballet training can take a dancer as
            far as they wish to go in the dance world.
          </p>

          <p>
            St. Croix Ballet is excited to offer Pre-Ballet (ages 3-4) and Level
            I-1 (ages 5-6) classes that meet Minnesota state standards for
            preschool. SCB has also redeveloped the curriculum for the first
            three years of ballet (Pre-Ballet through Level I-3) so that it is
            developmentally appropriate, fun, and gives young dancers a strong
            foundation to launch them into the Vaganova method of ballet taught
            at St. Croix Ballet.
          </p>
        </div>
      </section>
      <Contact />
    </div>
  </Layout>
)

export default Generic
