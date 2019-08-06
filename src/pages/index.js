import React from "react"
import Global from "../components/Global"
import Header from "../components/Header"
import LinkItem from "../components/LinkItem"
import { graphql } from "gatsby"

const Layout = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <Global>
      <Header />
      {nodes.map(node => {
        const { frontmatter } = node
        return (
          <LinkItem key={frontmatter.path} to={frontmatter.path}>
            {frontmatter.title}
          </LinkItem>
        )
      })}
    </Global>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
      nodes {
        frontmatter {
          title
          path
          date
          excerpt
        }
      }
    }
  }
`

export default Layout
