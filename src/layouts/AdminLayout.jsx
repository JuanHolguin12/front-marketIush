import React from 'react'

//COMPONENTS
import { NavBar } from "../components"

interface AdminLayoutProps {
    children: React.ReactNode; // o React.ReactElement si prefieres un único elemento
}

export function AdminLayout(props: AdminLayoutProps) {
    const { children } = props
    return (
        <div>
            <div>
                {children}
            </div>
        </div>

    )
}
