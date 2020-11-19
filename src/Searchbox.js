import React from 'react'
import './Searchbox.css'

//This component is responsible for Search Func by using handleChange func
function Searchbox({placeholder,handleChange}) {
    return (
        <div className ='search'>
            <input type='search' placeholder= {placeholder} onChange ={ handleChange} />
        </div>
    )
}

export default Searchbox
