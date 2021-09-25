import React from 'react'

const Home = ({ongoing}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2>Welcome to community chest!</h2>
            <div style={{display: 'flex'}}>Statistics:</div>
            <div style={{display: 'flex'}}>Ongoing campaigns: <b>[ {ongoing} ]</b></div>
            {ongoing === 0 && <div style={{display: 'flex'}}>Be the first!</div>}
        </div>
    )
}

export {Home}