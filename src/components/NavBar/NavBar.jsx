import React from 'react'

//CSS
import "./NavBar.css"

export function NavBar() {

    return (
        <nav className="bg-slate-500 text-primary-foreground shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img src='' alt='Logo'/>
                        <span className="font-bold text-xl">MarketIush</span>

                    </div>
                    <div className="hidden md:block">
                    </div>
                    <div className="hidden md:block">
                        <ul className='flex gap-8'>
                            <li>
                                Ver Pulicaciones
                            </li>
                            <li>
                                Mis Articulos
                            </li>
                            <li>
                                Publicar Articulo
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
