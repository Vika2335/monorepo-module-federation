import React from 'react'

export const UserCard = ({username}: {username?: string}) => {
    return (
        <div style={{border: '2px solid gray', padding: 20}}>
            username: {username ?? 'user'}
        </div>
    )
}

export default UserCard;