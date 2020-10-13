import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { graphql } from 'gatsby'
import pic11 from '../assets/images/pic11.jpg'

const Faculty = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Meet Our Staff</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Meet Our Staff</h1>
          </header>
          <div class="employees grid-wrapper">
            {data.allMarkdownRemark.edges.map(document => (
              <div id="employee_card" class="col-6 employee_card">
                <Img
                  fluid={
                    document.node.frontmatter.profile.childImageSharp.fluid
                  }
                  loading="eager"
                  alt={document.node.frontmatter.title}
                  style={{
                    margin: '1rem',
                    overflow: 'hidden',
                    position: 'relative',
                    objectFit: 'cover',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '200px',
                    height: '200px',
                    borderRadius: '20px',
                  }}
                  imgStyle={{ objectPosition: '50% 15%' }}
                />
                <h3 class="faculty-name">{document.node.frontmatter.name}</h3>
                <h4>{document.node.frontmatter.title}</h4>
                <div
                  className="blog-post-content"
                  id="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: document.node.html }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Faculty

export const pageQuery = graphql`
  query MyQueryold {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___order }) {
      edges {
        node {
          id
          frontmatter {
            title
            name
            profile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
              relativePath
            }
          }
          html
        }
      }
    }
  }
`
