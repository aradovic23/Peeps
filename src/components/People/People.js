import React from 'react'
import './people.scss'
import Person from '../Person/Person'
import { MdSearch } from "react-icons/md";

const People = (props) => {
    const men = props.data.filter(e => e.gender === 'male').length;
    const women = props.data.length - men;
    
    const {inputVal} = props
    const {grid} = props

    return (
        
        <div className='person-container'>
        <div className="search-bar">
                
                <MdSearch fontSize='24px'/>
            <input type="text" name="search" id="search" placeholder="Search users" onChange={(e) => {inputVal(e.target.value)}}/>
            </div>
                <div className='person-count'>
                <p>Male: {men} Female: {women}</p>
                </div>
            <div className='card-main'>
         {props.data.map(e =>  <Person grid={grid} img={e.picture.large} first={e.name.first} last={e.name.last} mail={e.email} dob={e.dob.date} key={e.login.uuid} gender={e.gender} />)}  
         </div>
        </div>
    )
}

export default People
