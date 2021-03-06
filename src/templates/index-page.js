import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'

import Layout from '../components/Layout'
import Hero from "../components/Hero";
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import ProjectRoll from "../components/ProjectRoll";

export const IndexPageTemplate = ({
                                      image,
                                      title,
                                      heading,
                                      subheading,
                                      mainpitch,
                                  }) => (

    //Banner Section
    <div>
        <div
            className="full-width-image margin-top-0"
            style={{
               // backgroundColor: 'rgb(255, 68, 0)',
            }}>
            <Hero/>
        </div>
            {/*
                backgroundImage: `url(${
                    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    height: '150px',
                    lineHeight: '1',
                    justifyContent: 'space-around',
                    alignItems: 'left',
                    flexDirection: 'column',
                }}
            >
                <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                        fontSize: '2rem',
                }}
                >
                    {title}
                </h1>
                <h2 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
                    {heading}
                </h2>
                <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
                    {subheading}
                </h3>
            </div>
        </div>
        */}


        {/*
        The pitch Section
        */}
        <section className="section section--gradient">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="content">
                                    <div className="tile">
                                        <h1 className="title">{mainpitch.title}</h1>
                                    </div>
                                    <div className="tile">
                                        <h3 className="subtitle">{mainpitch.description}</h3>
                                    </div>
                                </div>
                                <div className="column is-12">
                                    <h3 className="has-text-weight-semibold is-size-2">
                                        Latest projects
                                    </h3>
                                    <ProjectRoll/>
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/project">
                                            See all projects
                                        </Link>
                                    </div>
                                </div>

                                {/*
                                The Blog Section
                                */}
                                <div className="column is-12">
                                    <h3 className="has-text-weight-semibold is-size-2">
                                        Latest blog posts
                                    </h3>
                                    <BlogRoll/>
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/blog">
                                            See all blogs
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
}

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
            />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
      }
    }
  }
`
