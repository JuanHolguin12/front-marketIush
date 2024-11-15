import React from 'react'
import { useNavigate } from "react-router-dom"
import { IconIUSH } from "../../assets"

import { useAuth } from "../../hooks"


//CSS
import "./NavBar.css"

export function NavBar() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const onLogout = () => {
        logout()
        navigate("/")
    }


    return (
        <nav className="bg-[#00386D] shadow-lg">
            <div className="px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <IconIUSH.logoColor className='h-16 w-16 mr-1' />
                        <span className="font-bold text-xl text-[#f5f5f5]">MarketIush</span>

                    </div>
                    <div className="hidden md:block">
                    </div>
                    <div className="hidden md:block">
                        <ul className='flex gap-8'>
                            <li>
                                <a href='/articules'>
                                    Ver Pulicaciones
                                </a>
                            </li>
                            <li>
                                <a href='/my-articules'>
                                    Mis Articulos
                                </a>
                            </li>
                            <li>
                                <a href='/publish-article'>
                                    Publicar Articulo
                                </a>
                            </li>
                            <li>
                                <button className='text-red-500' onClick={onLogout}>Cerrar Sesión</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="material-symbols-outlined text-4xl text-white">
                            account_circle
                        </span>
                        <span className="material-symbols-outlined text-white">
                            arrow_drop_down
                        </span>
                    </div>
                </div>

            </div>
        </nav>
    )
}
