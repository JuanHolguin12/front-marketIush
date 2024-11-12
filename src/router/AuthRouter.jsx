import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";


//COMPONENTS
import { AdminLayout } from "../layouts/AdminLayout"
import { Auth } from "../page/admin/Auth"
import { NavBar, ArticulesList } from '../components';

import { useAuth } from "../hooks"

//const user= null
export function AdminRouter() {
    const { user } = useAuth();

    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        )
    }
    return (
        <Routes>
            {!user ? (
                <>
                    <Route path='/*' element={< Navigate to="/login" />} />
                    <Route path='/login/*' element={<Auth />} />
                </>
            ) : (
                <>
                    <Route path='/login/*' element={< Navigate to="/" />} />
                    {["/", "/articules"].map((path) => (
                        <Route key={path} path={path} element={loadLayout(AdminLayout, ArticulesList)} />
                    ))}
                    <Route path='/my-articules' element={loadLayout(AdminLayout, NavBar)} />
                    <Route path='/publish-article' element={loadLayout(AdminLayout, NavBar)} />
                </>
            )}
        </Routes>
    )
}
