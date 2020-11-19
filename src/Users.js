import React, {useState} from 'react'
import CreateUser from './CreateUser';
import { Button } from '@material-ui/core'
import './Users.css'
function Users(props) {
    console.log('---------------', props)

    return (
        
        <div className = 'usercard-container'>
        
            {
                props.users && props.users.map((user, index) => (
                    <div className = 'usercard' key={index} >
                        <img alt='monster' src={`https://robohash.org/${index}?set=set2&size=180x180`} />
                        <h4  >Id: {user.id}</h4>
                        <h3 > First Name: {user.firstName}</h3>
                        <h3  >Last Name: {user.lastName}</h3>
                        <h3  >Phone: {user.PhoneNo}</h3>
                        <h4  >Email: {user.email}</h4>
                        <h4  >DOB: {user.birthday}</h4>
                        <Button variant='outlined' className="delete-user" onClick={() => {
                            props.deleteSingleUser(user.id)
                        }}  >Delete user</Button>
                       
                        <Button variant='outlined' className="update-user" onClick={() => props.showUserPopup(true)}>Update user</Button>
                    </div>
                ))
            }
        </div>
       
    )
}

export default Users

