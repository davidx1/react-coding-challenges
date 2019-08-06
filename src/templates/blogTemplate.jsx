import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import LinkItem from "../components/LinkItem"
import ReactMarkdown from "react-markdown"
const Template = props => {
  console.log(props)
  const markdown = props.data.markdownRemark.rawMarkdownBody
  const {prev, next} = props.pageContext
  return (
    <div>
      <TopNav>
        <LinkItem to="/">Home</LinkItem>
      </TopNav>
      <hr/>
      <ReactMarkdown source={markdown} />
      <hr/>
      <FooterNav>
        <LinkItem to={prev ? prev.frontmatter.path : '/'} disabled={prev === null}>Previous</LinkItem>
        <LinkItem to={next ? next.frontmatter.path : '/'} disabled={next === null}>Next</LinkItem>
      </FooterNav>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        title
      }
    }
  }
`

export default Template

const TopNav = styled.div`
`

const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
`
