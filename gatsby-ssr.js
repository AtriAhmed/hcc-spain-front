/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export function onRenderBody({ setHtmlAttributes }) {
  setHtmlAttributes({ lang: `en` })
}

import React from "react"
import UIToolsProvider from "./src/contexts/UIToolsProvider"
import Layout from "./src/components/layout"
import AdminLayout from "./src/components/admin/adminLayout/AdminLayout"
import AdminPrivateRoute from "./src/components/auth/AdminPrivateRoute"

export function wrapPageElement({ element, props }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <UIToolsProvider>
      {props.location.pathname.indexOf("/admin") === 0 ? (
        <AdminPrivateRoute>
          <AdminLayout>
            {element}
          </AdminLayout>
        </AdminPrivateRoute>
      ) : (
        <Layout {...props}>{element}</Layout>
      )}
    </UIToolsProvider>
  )
}
