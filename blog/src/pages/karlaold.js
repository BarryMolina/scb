import Checkout from '../components/Products/Checkout'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Products from '../components/Products/Products'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import pic11 from '../assets/images/pic11.jpg'

const Registration = ({ data }) => (
  <Layout>
    <Helmet></Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>The Karla Sweeney Foundation</h1>
          </header>
          <p>
            Karla Sweeney founded St. Croix Ballet in 1991 in the basement of
            the Sweeney’s Stillwater home. She built the program into one of the
            Twin Cities top ballet studios. After a gallant 15-year battle with
            late-stage breast cancer, Mz. Karla passed away on February 12,
            2015. Karla graduated from the University of Utah with a BFA in
            Ballet. She danced with Ballet West and several regional companies
            in the Southwest, performing in the Nutcracker, Les Sylphides,
            Coppelia, and others. She then toured the United States and Mexico
            as the featured dancer with Disney on Parade Mary Poppins show, and
            then traveled to England and South Africa with other Disney
            productions.{' '}
          </p>
          <p>
            Karla has left a beautiful legacy of quality ballet and dance to the
            St. Croix Valley. jmp Karla Sweeney313.jpg For almost 20 years, St.
            Croix Ballet has maintained a non-profit affiliate to promote ballet
            and dance education and performing opportunities for students in the
            St. Croix Valley and the East Metro region.{' '}
          </p>
          <p>
            In 2016, the former "Ballet Jubilate' became 'The Karla Sweeney
            Foundation for the Arts' in honor of St. Croix Ballet's Founder.
            Since 2013, an annual 'Evening on Pointe' fundraiser at the Grand
            Banquet Hall in downtown Stillwater has been held. The elegant event
            includes dinner, a silent auction, and special performances by St.
            Croix Ballet dancers. Evening on Point has become a beloved yearly
            tradition for the studio and an opportunity to for the community to
            further support youth and the arts in our region.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Registration

export const pageQuery = graphql`
  query Karla {
    allStrapiTheKarlaSweeneyFoundation {
      edges {
        node {
          Page
        }
      }
    }
  }
`
