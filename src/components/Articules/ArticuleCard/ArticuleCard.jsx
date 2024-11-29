import React from 'react'
import "./ArticuleCard.css"
import { Link } from 'react-router-dom'

export function ArticuleCard(props) {
    const { articule } = props

    function currencyFormatter({ currency, value }) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            minimumFractionDigits: 0,
            currency
        })
        return formatter.format(value)
    }

    // Función para formatear la fecha
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        return date.toLocaleDateString("es-ES", options);
    }



    function infoArticule() {
        console.log(articule);
    }
    return (
        <Link to={`/posts/id/${articule.id}`}>
            <div className='card border-2 rounded-md cursor-pointer' >
                <img src={articule.imageUrl} alt="img_art" className='w-full border-b-2  bg-blue-500 h-56 rounded-t-md' />
                <div className='information p-6'>
                    <h2 className='font-semibold text-xl'>{articule.title}</h2>
                    <p>{articule.description}</p>
                    <p>Estado del material: <span className='font-bold'> {articule.condition}</span></p>
                    <p className='overflow-hidden font-semibold'>Price: {currencyFormatter({
                        currency: "USD",
                        value: articule.price
                    })}</p>
                    <p><span className='font-semibold'>Publicado:</span> {formatDate(articule.createdAt)}</p>
                </div>
            </div>
        </Link>

    )
}
