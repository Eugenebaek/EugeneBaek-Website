import React from 'react'

import Layout from '../../components/Layout'
import ProjectRoll from "../../components/ProjectRoll";

export default class ProjectIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: `url('/img/blog-index.jpg')`,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: `rgba(0,0,0,0.5)`,
                            width: `100%`,
                            height: `100%`,
                            textAlign: `center`,
                        }}
                    >
                        <h1
                            className="has-text-weight-bold is-size-1"
                            style={{
                                color: 'white',
                                padding: '2rem',
                            }}
                        >
                            Projects
                        </h1>
                        <p
                            style={{
                                color: 'white',
                            }}
                        >
                            Here is a showcase of some of the projects that I have worked on.
                        </p>
                    </div>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <ProjectRoll/>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
