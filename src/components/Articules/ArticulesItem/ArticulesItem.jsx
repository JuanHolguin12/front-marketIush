import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon } from "semantic-ui-react"

export function ArticulesItem(props) {
    const { articule } = props
    console.log(articule);

    return (
        <div className='flex justify-between h-24 w-full mb-3 border-2 rounded-lg'>
            <div className='flex items-center'>
                <img className='h-full mr-5 rounded-l-lg' src={articule.imageUrl} alt='articuleImage' />
                <div>
                    ArticulesItem {articule.title}
                    <p>{articule.price}</p>
                </div>
            </div>
            <div className='flex items-center pr-5'>
                <Button primary icon >
                    <Icon name='pencil' />
                </Button>
                <Button color={articule.isDeleted ? "green" : "red"} icon>
                    <Icon name={articule.isDeleted ? "check" : "trash"} />
                </Button>
            </div>
        </div>
    )
}
