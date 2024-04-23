/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import "./src/globals.css"
import React from "react"
import Layout from "./src/components/layout"
import AdminLayout from "./src/components/admin/adminLayout/AdminLayout"
import UIToolsProvider from "./src/contexts/UIToolsProvider"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "animate.css";
import axios from "axios"
import AdminPrivateRoute from "./src/components/auth/AdminPrivateRoute"
import AuthProvider from "./src/contexts/AuthProvider"

export function onClientEntry() {
  /* Prevents fontawesome auto css insertion */
  config.autoAddCss = false
  axios.defaults.baseURL = process.env.GATSBY_API_URL
  axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config

  })
}

export function wrapPageElement({ element, props }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <AuthProvider>
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
    </AuthProvider>
  )
}
