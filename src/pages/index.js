// This is the homepage.

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import ItemThumbnail from '../components/ItemThumbnail/ItemThumbnail';
import Layout from "../components/layout"
import SEO from "../components/seo"

const Heading1White = styled.h1`
    font-size: 3.5em;
    padding: 10px;
    text-align: center;
    width: 100%;
    min-height: 85px;
    margin: auto;
    color:#ffffff;

`
const Heading1 = styled.h1`
    font-size: 3.5em;
    padding: 10px;
    text-align: center;
    width: 100%;
    min-height: 85px;
    margin: auto;
`

const Wrapper = styled.section`
  background:#646C79;
  border: #1F3044;
  padding: 50px;

`

const ContentWrapper = styled.div`
    width: auto;
    color:#ffffff;
    font-size: 1.5em;
    padding-top: 20px;

`
const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    margin-left:20px;
`
const Img = styled.img`
`


const query = graphql`
  query {
    file(relativePath: { eq: "content/assets/bailey-coffee-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

import Img from "gatsby-image"
export ({ data }) => (
<div>
<Img fluid={data.file.childImageSharp.fluid} alt="Gatsby logo" />
</div>
)

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const items = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All items" />
        <Wrapper>
        <Heading1White>Artisian Coffee Roaster & Wholesaler</Heading1White>
        <ContentWrapper>
        Bailey coffee is renowned for our pursuit of knowledge about traditional artisan espresso and associated machinery used for its preparation, handmade of shiny metal. Established in North Melbourne in 2006 after acquiring the relevant experience, skills and tools to produce quality artisan coffee.
        </ContentWrapper>
        <ContentWrapper>
        This quality ingredient is handled with utmost care; stringent quality control is our hallmark.
        </ContentWrapper>
        <ContentWrapper>
        We are traditionalists who love to roast and toast. We enjoy our role in the preparation of traditional artisan espresso, from sourcing and roasting to the final cup. Café humane, handled with utmost care at all times.
        </ContentWrapper>
        </Wrapper>

      <ThumbnailsWrapper>
            <Heading1>Products</Heading1>
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
