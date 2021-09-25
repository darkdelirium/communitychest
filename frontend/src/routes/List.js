import React from 'react'
import { Item } from './ListComp'
import { Link } from 'react-router-dom'

const getItems = (items,participate) => {
    if (items.length === 0) {
        return (<div style={{marginTop: 20, marginBottom: 20}}><h5>No campaigns yet</h5></div>)
    }
    return (<div className='item-overall-container'>
        {items.map(item=>(
            <Item {...item} participate={participate}/>
        ))}
    </div>)
}

const List = ({
    items = [],
    participate
}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems:'flex-start'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h2>Campaigns List</h2>
                <div style={{paddingLeft: 20}}>[ <Link to='/campaignnew'>Create your own</Link> ]</div>
            </div>
            <div>
                {getItems(items,participate)}
            </div>
        </div>
    )
}

export {List}