import React from 'react'

import { Button, Icon } from "semantic-ui-react"

export function CommentItem(props) {
    const { comment } = props

    const accept = () =>{
        console.log('accept');
    }
    const rejected = () =>{
        console.log('rejected');
    }
    return (
        <div className='border-b-2 border-[#00386D] flex justify-between items-center p-3'>
            <p>{comment.content}</p>
            <div>
                <Button icon color='green' onClick={accept}>
                    <Icon name='check'/>
                </Button>
                <Button icon color='red' onClick={rejected}>
                    <Icon name='ban'/>
                </Button>
            </div>
        </div>
    )
}
