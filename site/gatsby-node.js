const path = require('path')
const data = require('./content/config.json')

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  return graphql(`
    {
      contentJson {
        pages {
          page
          path
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors
    const { pages } = result.data.contentJson
    pages.forEach(page => {
      const pageTemplate = path.resolve(`src/templates/${page.page}.js`)
      createPage({
        path: page.path,
        component: pageTemplate,
        context: {
          page: page.page,
          pageList: pages
        }
      })
    })
  })
}

