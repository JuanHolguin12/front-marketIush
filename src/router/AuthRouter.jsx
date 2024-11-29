import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";


//COMPONENTS
import { AdminLayout } from "../layouts/AdminLayout"
import { Auth } from "../page/admin/Auth"
import { RegisterPage } from "../page/admin/Register"
import { PublishArticule, ArticuleView } from "../page/web"
import { NavBar, ArticulesList, MyArticules } from '../components';

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
                    <Route path='/register' element={< RegisterPage />} />
                    <Route path='/*' element={< Navigate to="/login" />} />
                    <Route path='/login/*' element={<Auth />} />
                </>
            ) : (
                <>
                    <Route path='/login/*' element={< Navigate to="/" />} />
                    {["/", "/articules"].map((path) => (
                        <Route key={path} path={path} element={loadLayout(AdminLayout, ArticulesList)} />
                    ))}
                    <Route path='/my-articules' element={loadLayout(AdminLayout, MyArticules)} />
                    <Route path='/publish-article' element={loadLayout(AdminLayout, PublishArticule)} />
                    <Route path='/posts/id/:id' element={loadLayout(AdminLayout, ArticuleView)} />
                    <Route path='/posts/user/:id' element={loadLayout(AdminLayout, MyArticules)} />
                </>
            )}
        </Routes>
    )
}
