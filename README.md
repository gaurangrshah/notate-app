## Jammers Starter


```shell
yarn
```

To consume the theme run develop on site after configuration is updated:
```shell
  yarn workspace site develop
```

Alternatively you could edit any of the themes itself using:
```shell
  yarn workspace gatsby-theme-[theme-name] develop
```



Use this starter for any simple web projects:

Starter Contains:

- [ ] Boostrap
- [ ] SCSS
- [ ] Reactstrap
- [ ] Theme-UI
- [ ] Rebass



Currently generating data from JSON, stored in:

`~/content`:

```text
.
├── content
│   ├── config.json
│   ├── sections
│   └── templates
└── src
    ├── assets
    ├── components
    ├── gatsby-plugin-theme-ui
    ├── gatsby-theme-styleguide
    ├── hooks
    ├── pages
    ├── routes.js
    ├── styles
    ├── templates
    └── utils.js
```

- Currently you can configure your site structure by editing `config.json`:

```json
{
  "theme": "default",
  "pages": [
    {"page": "home", "path": "/" },
    {"page": "about", "path": "/about" },
    {"page": "services", "path": "/services"},
    {"page": "contact", "path": "/contact" }
  ]
}
```

This config is used by `gatsby-node.js` to create pages each of the items provided in our pages array.

`gatsby-node.js`

```js
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
```

A separate template file is used for each page currently, allows us to dictate what each page will be, this can be condensed down and used to pull in components dynamically if need be. -- see todo list below.

Template files and composite components are house in `src/templates`:

```text
├── templates
│   ├── about-cards.js
│   ├── about.js
│   ├── contact-card.js
│   ├── contact-form.js
│   ├── contact.js
│   ├── home-cards.js
│   ├── home.js
│   ├── service-cards.js
│   ├── service-featuredCards.js
│   └── services.js
```

- kebab-cased entries help organize components with the page template that renders them.

Lastly the content for most elements is kept separate from its logic also using json: `site/content/sections/`

```text
├── config.json
├── sections
│   ├── about
│   ├── contact
│   ├── footer.json
│   ├── home
│   └── services
└── templates
    └── master.json
```

- `content/templates ` - needs to be implemented still. can be ignored for now.



---

- [ ] <u>update</u> theme-ui to version `0.3.0` && `gatsby-plugin-theme-ui`
- [ ] <u>TODO</u>: Complete Templating using Component System.
- [ ] Reintegrate: `PageSlot.js` && `Slot.js` for templating.
- [ ] Aesthetics: - fix responsiveness && sidebar menu z-index issue.
- [ ] Add propTypes and unit tests

Not too many other opinions have been formed aside from the structure, which is very still.

