import React from 'react'


function Users(props) {
    console.log('---------------',props)
    return (
        <div>
        {
            props.users && props.users.map((user,index) => (
                <div key = {index} >
                <h1  >{user.id}</h1>
                <h1 >{user.firstName}</h1>
                <h1  >{user.lastName}</h1>
                <h1  >{user.PhoneNo}</h1>
                <h1  >{user.email}</h1>
                <h1  >{user.birthday}</h1>
                < button id = 'delete-user' onClick={()=> props.deleteSingleUser(user.id) } />
                </div>
            ))
        }
        </div>
    )
}

export default Users

