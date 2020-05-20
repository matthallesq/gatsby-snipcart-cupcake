// This is the homepage.

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import ItemThumbnail from '../components/ItemThumbnail/ItemThumbnail';
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`
const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const items = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All items" />
      <ThumbnailsWrapper>
        {items.map(({ node }) => {
          const { title, image, price } = node.frontmatter
          return (
            <ItemThumbnail
              key={node.fields.slug}
              link={node.fields.slug}
              heading={title}
              image={image.childImageSharp.fluid}
              price={price}
            />
          )
        })}
      </ThumbnailsWrapper>
      <Wrapper>
      Bailey coffee is renowned for our pursuit of knowledge about traditional artisan espresso and associated machinery used for its preparation, handmade of shiny metal. Established in North Melbourne in 2006 after acquiring the relevant experience, skills and tools to produce quality artisan coffee.

      This quality ingredient is handled with utmost care; stringent quality control is our hallmark.

      We are traditionalists who love to roast and toast. We enjoy our role in the preparation of traditional artisan espresso, from sourcing and roasting to the final cup. Café humane, handled with utmost care at all times.
      </Wrapper>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            price
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
