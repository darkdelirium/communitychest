import React from 'react'
import {ProgressBar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'

const Item = ({
    title = 'test title',
    description = 'test description',
    earned = 10,
    target = 100,
    wallet,
    participate
}) => {
    const history = useHistory()
    const handleParticipate = () => {
        participate({
            title,
            wallet
        })
        history.push('send')
    }
    return (
        <div className='item-container'>
            <div className='item-container-title'>{title}</div>
            <div className='item-container-description'>{description}</div>
            <div className='item-container-image'>
                <img src='https://via.placeholder.com/278x300' />
            </div>
            <div className='item-container-bottom-container'>
                <div className='item-container-progress'>
                <ProgressBar now={Math.round(earned*100/target)}/>
            </div>
                <div className='item-container-participate'>
                    <span
                        onClick={handleParticipate}
                    >participate</span>
                </div>
            </div>
            
        </div>
    )
}

export { Item }