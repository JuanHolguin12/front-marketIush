import React from 'react'

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
    return (
        <div className='border-2 rounded-md'>
            <img src="" alt="img_art" className='border-b-2' />
            <div className='p-6'>
                <h2 className='font-semibold text-xl'>{articule.articuleName}</h2>
                <p>{articule.description}</p>
                <p className='overflow-hidden font-semibold'>Price: {currencyFormatter({
                    currency: "USD",
                    value: articule.price
                })}</p>
            </div>
        </div>
    )
}
