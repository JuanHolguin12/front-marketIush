import React from 'react'
import { Routes, Route } from "react-router-dom";


//COMPONENTS
import { AdminLayout } from "../layouts/AdminLayout"
import { Auth } from "../page/admin/Auth"

export function AdminRouter() {
    const loadLayout = (Layout , Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        )
    }
    return (
        <Routes>
            <Route path='/admin/*' element={loadLayout(AdminLayout, Auth)} />
        </Routes>
    )
}
