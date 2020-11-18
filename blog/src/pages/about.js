import BannerLanding from '../components/BannerLanding'
import Contact from '../components/Contact'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import React from 'react'
import cindy from '../assets/images/cindy.jpg'
import gigionne from '../assets/images/gigionne.jpg'
import performance from '../assets/images/performance.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>About St. Croix Ballet</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>The Vagonova Method</h2>
          </header>
          <p>
            For 30 years, St. Croix Ballet has offered classical ballet training
            for families and students in the St. Croix Valley and eastern Twin
            Cities metro area. Our instruction is founded on the principles of
            the Russian Vagonova Method. In addition, dancers have the
            opportunity to receive training in a wide variety of dance styles
            throughout the year, including character and modern dance.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <img className="image" src={cindy} alt="" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Student Success</h3>
              </header>
              <p>
                Our students have been accepted into programs at the Royal
                Winnipeg Ballet, Alvin Alley American Dance Theater, Joffrey
                Ballet, Ballet Austin, Milwaukee Ballet, Bossov Ballet, Harid
                Conservatory, Butler University, University of Iowa, Gelsey
                Kirkland Academy and numerous others. Many of our students
                enroll in dance programs in college or go on to dance
                professionally. In other words, for those pursuing a
                professional dance tract, our training prepares our students for
                numerous professional dance opportunities.
              </p>
            </div>
          </div>
        </section>
        <section>
          <img className="image" src={performance} alt="" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Performance Opportunities</h3>
              </header>
              <p>
                We perform two ballets during the course of the year. Our
                Nutcracker has been performed for nearly three decades, and is a
                fixture of the St. Croix Valley. The spring show is a student
                favorite as well, and in the past we've performed Coppélia,
                Sleeping Beauty and Cinderella. We produce a three-week summer
                intensive that teaches modern, character, jazz, ballet, and
                Pilates; it culminates in a Summer Gala performance in
                Stillwater's picturesque Pioneer Park. In addition, periodic
                Master Classes by guest artists and intensives are offered
                throughout the year.
              </p>
            </div>
          </div>
        </section>
        <section>
          <img className="image" src={gigionne} alt="" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>A Foundation For Life</h3>
              </header>
              <p>
                Of course, not everyone will be a professional dancer. Many
                dancers with St. Croix Ballet simply choose ballet as their
                elementary or high school 'sport'. We've had the honor of
                watching these students take with them the discipline, training
                and the love of dance as they forge successful life trajectories
                and careers in many fields. Of this, we are most proud.
              </p>
            </div>
          </div>
        </section>
      </section>
      <Contact />
    </div>
  </Layout>
)

export default Landing
