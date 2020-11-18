import React,{useState} from 'react'

function CreateUser(props){
    console.log(props)
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [PhoneNo,setPhoneNo] = useState('');
    const [email,setEmail] = useState('');
    const [birthday,setBirthday] = useState('');
    return (
        <div>
            
            <label>
            First name: 
            <input type="text" name="firstName" value={firstName} onChange={(e)=> {
                setFirstName(e.target.value)            
            }} />
            </label>
            <label>
            Last name: 
            <input type="text" name="lastName" value={lastName} onChange={(e)=> {
                setLastName(e.target.value)            
            }} />
            </label>
            <label>
            PhoneNo: 
            <input type="telphone" name="PhoneNo" value={PhoneNo} onChange={(e)=> {
                setPhoneNo(e.target.value)            
            }} />
            </label>
            <label>
            Email: 
            <input type="email" name="email" value={email} onChange={(e)=> {
                setEmail(e.target.value)            
            }} />
            </label>
            <label>
            Birthday: 
            <input type="text" name="birthday" value={birthday} onChange={(e)=> {
                setBirthday(e.target.value)            
            }} />
            </label>
            <input type='submit' value='add' onClick = { () => props.addUser(firstName,lastName,PhoneNo,email,birthday) }  />            
            
        </div>
    )
}

export default CreateUser
