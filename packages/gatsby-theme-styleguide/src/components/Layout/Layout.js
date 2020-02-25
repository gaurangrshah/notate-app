import React from "react"
import { Layout as ThemeLayout } from "theme-ui"
import "../../styles/styles.scss"

const Layout = ({ children }) => (
  <ThemeLayout>
    {/* <Header>{title}</Header> */}
    {children}
  </ThemeLayout>
)

export default Layout
