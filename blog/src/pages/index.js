import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import snow from '../assets/images/snow.jpg'
import zoom from '../assets/images/zoom.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="St. Croix Ballet"
          meta={[
            {
              name: 'description',
              content: 'Classical Training At Its Finest',
            },
            {
              name: 'keywords',
              content:
                'ballet, st croix, stillwater, vagonova, classical, dance',
            },
            {
              name: 'og:title',
              content: 'St. Croix Ballet - Classical Training At Its Finest',
            },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${snow})` }}>
              <header className="major">
                <h3>Nutcracker Suite</h3>
                <p>Stay up to date</p>
              </header>
              <Link to="/nutcracker" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Registration</h3>
                <p>Sign Up For Classes</p>
              </header>
              <Link to="/registration" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>About Us</h3>
                <p>Learn about St. Croix Ballet</p>
              </header>
              <Link to="/about" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Faculty</h3>
                <p>Meet Our Staff</p>
              </header>
              <Link to="/faculty" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>The Karla Sweeney Foundation</h3>
                <p>Our Founder's Legacy</p>
              </header>
              <Link to="/karla" className="link primary"></Link>
            </article>
          </section>
          <section id="two"></section>
          <Contact />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
