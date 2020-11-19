import React from 'react'

import { Button } from '@material-ui/core'
import './Users.css'


//This component is responsible for Displaying the Users from the Local Storage
function Users(props) {

    return (

        <div className='usercard-container'>

            {
                props.users && props.users.map((user, index) => (
                    <div className='usercard' key={index} >
                        <img alt='monster' src={`https://robohash.org/${index}?set=set2&size=180x180`} />
                        
                        <h3>FirstName: {user.firstName}</h3>
                        <h3>LastName: {user.lastName}</h3>
                        <p>Phone: {user.PhoneNo}</p>
                        <p>Email: {user.email}</p>
                        <p>DOB: {user.birthday}</p>
                        <Button variant='outlined' className="delete-user" onClick={() => {
                            props.deleteSingleUser(user.id)
                        }}  >Delete user</Button>

                        <Button variant='outlined' className="update-user" onClick={() => {
                            const currentUser = user;
                            props.setUserAction('Update User', currentUser);
                        }}>Update User</Button>

                    </div>
                ))
            }
        </div>

    )
}

export default Users

