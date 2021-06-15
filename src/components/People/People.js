import React from 'react'
import './people.scss'
import Person from '../Person/Person'
import mag from '../../img/mag.png'

const People = (props) => {

    return (
            <div className='person-container'>
                <div className="search-bar">
                <img src={mag} alt="" />
            <input type="text" name="search" id="search" placeholder="Search"></input>
            </div>
         {props.data.map(e =>  <Person img={e.picture.medium} first={e.name.first} last={e.name.last} mail={e.email} dob={e.dob.date} key={e.login.uuid} />)}  
        </div>
    )
}

export default People
