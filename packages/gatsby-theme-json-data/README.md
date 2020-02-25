🚨🚧🏗
# WIP -- Under Development

Theme used to consume data from json.
uses: [gatsby-transformer-json](https://www.gatsbyjs.org/packages/gatsby-transformer-json/?=json)


```
yarn workspace gatsby-theme-json-data add gatsby-transformer-json gatsby-source-filesystem
```

`gatbsy-config.js`
```js
module.exports = {
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}
```
