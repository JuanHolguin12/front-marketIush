import React from 'react'

//COMPONENTS
import { NavBar } from '../components'



export function AdminLayout(props) {
    const { children } = props
    return (
        <div>
            <div>
                <NavBar/>
                {children}
            </div>
        </div>

    )
}
