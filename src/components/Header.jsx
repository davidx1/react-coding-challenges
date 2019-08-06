import React from "react"
import { StaticQuery, graphql } from "gatsby"

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title
  const greeting = data.site.siteMetadata.greeting

  return (
    <div>
      <h2>{title}</h2>
      <p>{greeting}</p>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              greeting
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
