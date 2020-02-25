🚨🚧🏗
# WIP -- Under Development

Theme exposes default styles, to add boostrap and introduce scss to consumer:

create a styles directory in the consuming site:

`~/site/src/styles.scss`

```scss
  @import '~bootstrap/scss/bootstrap';

  body {
    background: $primary;
  }
```
**NOTE:** boostrap must be imported into site as above.

- Then import into project:
`~/src/pages/index.js`
```js
import "../styles/styles.scss"
```

-- Now test:

`~/src/pages/index.js`
```js
  import React from 'react'
  import "../styles/styles.scss"

  export default function about() {
    return (
      <div className="text-center">
        Test
      </div>
    )
  }
```

## Setup

```json
{
  "private": true,
  "workspaces": [
    "gatsby-theme-boostrap-sass",
    "site"
  ]
}

```

~/site/package.json:
```json
  "dependencies": {
    "gatsby-theme-boostrap-sass": "*",
  }
```

~/site/gatsby-config.js

```js
module.exports = {
  plugins: [`gatsby-theme-boostrap-sass`]
}
```

Run yarn to ensure the packages' relationships are set properly.
```shell
yarn
```

To consume the theme:
```shell
  yarn workspace site develop
```

Alternatively you could update the theme using:
```shell
  yarn workspace gatsby-theme-boostrap-sass develop
```
