import React from 'react'

const Person = (props)=> {

    const date = new Date(props.dob)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()


    return (
        <div>
              <div className="person-card" key={props.key}>
                    <div className='profile-image'>  
                    <img src={props.img} alt="no-img"></img>
                    </div>
                    <div className='data'>
                    <span className='name'>{props.first} {props.last}</span>
                    <span> email: {props.mail}</span>
                    <span>{day}.{month + 1}.{year}.</span>
                    </div>
                </div>
        </div>
    )
}

export default Person
