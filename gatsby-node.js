const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/blogTemplate.jsx")

  return graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.nodes

    return result.data.allMarkdownRemark.nodes.forEach((node, index) => {
      const path = node.frontmatter.path
      createPage({
        path: path,
        component: blogPostTemplate,
        context: {
          slug: path,
          prev: index === 0 ? null : posts[index - 1],
          next: index === (posts.length-1) ? null : posts[index + 1]
        },
      })
    })
  })
}
