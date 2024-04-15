import React from 'react'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'

export default function AdminLayout(props) {
  return (
    <>
     <AdminNavbar/>
     <Sidebar/>
     <div className='content ml-0 lg:ml-[250px] lg:pt-[4rem]'>{props.children}</div>
    </>
  )
}
