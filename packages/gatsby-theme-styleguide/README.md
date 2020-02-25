🚨🚧🏗

# WIP -- Under Development

-- to install run:

```shell
  yarn workspace [consuming-site-name] add "gatsby-theme-styleguide@*"
```

This theme configures the following packages and plugins for consumption by a site:

```shell
gatsby-plugin-theme-ui theme-ui @emotion/core @emotion/styled @mdx-js/react
```

> **INFO:**
>
> `gatsby-plugin-theme-ui` takes a global theme context object and makes it available to all themes using `gatsby-plugin-theme-ui`, it exposes an object that we can configure using the[ `system-ui` theme specification]( https://system-ui.com/):
>
> We configure this object by adding a `theme.js` :

 `gatsby-theme-styleguide/theme.js`:

```js
export const theme = {
  /* set theme and defaults here... */
}
```

> **NOTE:** we've defined default styling for the following components that `theme-ui` exposes for us:
>
> Layout 	||	Header	||	Main	||	Container
>
> Along with default html elments:
>
> h1 	|| 	ul	||	li



## Component Shadowing && Theme Overrides

Allows us to override a default theme from `gatsby-theme-ui` to do this we create a directory that houses our shadowed components, the directory must be named: `src/gatsby-plugin-theme-ui`

---

`gatsby-theme-styleguide/src/gatsby-plugin-theme-ui/index.js`

```js
import { theme } from "../theme"

export default theme;
```



Using Theme-UI Styled Elements:

> We've actually moved this into another theme, this component is now defined by our `gatsby-theme-yaml-data`

`gatsby-theme-yaml-data/src/components/event-list.js`:

```react
import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"
const EventList = ({ events }) => {
  return (
    <>
      <Styled.h1>Upcoming Events</Styled.h1>
      <Styled.ul>
        {events.map(event => (
          <Styled.li key={event.id}>
            <strong>
              <Link to={event.slug}>{event.name}</Link>
            </strong>
            <br />
            {new Date(event.startDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            in {event.location}
          </Styled.li>
        ))}
      </Styled.ul>
    </>
  )
}
export default EventList
```

> Note that this theme still has access to the components we've styled using theme-ui



Overriding Overall Theme from **ANY** Consuming site:

> **NOTE**: the placement of this directory must mimic the location of the same directory from the theme.



`site/src/gatsby-plugin-theme-ui/index.js`

```react
import merge from "lodash.merge"
import { theme } from "@jlengstorf/gatsby-theme-events"
export default merge({}, theme, {
  colors: {
    primary: "blue",
  },
})
```



`site/src/gatsby-plugin-theme-ui/theme.js`

```react
import { theme as baseTheme } from 'gatsby-theme-styleguide/src/gatsby-plugin-theme-ui'

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#333",
    background: "#fff",
    primary: "tomato",
  },
  fonts: {
    body: "Georgia, serif",
    heading: "system-ui, sans-serif",
  },
}
```



Shadowing a default theme component from a consuming theme:

> **NOTE**: Once again the folder and the component must exist exactly as it does for the plugin or theme we are shadowing

`site/src/gatsby-theme-styleguide/layout.js`

```react
import React from "react"

export default ({ children }) => {
  console.log(children)
  return <>{children}</>
}
```



We may also have a scenario where we want to override another component being either consumed or created by another theme:

`site/src/gatsby-theme-yaml-data/Event.js`

```js
import React from 'react';
import Event from 'gatsby-theme-yaml-data/src/components/Event';

export default props => (
  <div>
    <Event {...props} />
    <h2>An event! Yay!</h2>
    <p>Woo hoo!</p>
  </div>
);

```

> Here we've simply just added an `<h2>` and a `<p>` to show that we can pass thru a component from another theme in order to shadow it, allowing us to configure it how we like or just add other content to the component like we are here.




## Setup

```json
{
  "private": true,
  "workspaces": [
    "gatsby-theme-styleguide",
    "site"
  ]
}

```

~/site/package.json:
```json
  "dependencies": {
    "gatsby-theme-styleguide": "*",
  }
```

~/site/gatsby-config.js

```js
module.exports = {
  plugins: [`gatsby-theme-styleguide`]
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
  yarn workspace gatsby-theme-styleguide develop
```
