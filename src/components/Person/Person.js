import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdCake } from "react-icons/md";

const Person = (props)=> {

    const date = new Date(props.dob)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    
    const email = props.mail;

    const maskEmail = (email = '') => {
        const [name, domain] = email.split('@');
        const { length: len } = name;
        const maskedName = name[0] + name[1] + name[3] + '...' + name[len - 1] + name[len -2] + name[len -3];
        const maskedEmail = maskedName + '@' + domain;
            return maskedEmail;
    };

    return (
        <div className='card-container'>
           
           <div className={props.gender === "male" ? "person-card" : "female-card"}>
                    <div className='profile-image'>  
                    <img src={props.img} alt="no-img"></img>
                    </div>
                    <div className='data'>
                    <span className='name'>{props.first} {props.last}</span>
                    <span> <MdEmail/> Email: {maskEmail(email)}</span>
                    <span> <MdCake/> Date of birth: {day}.{month + 1}.{year}.</span>
                    </div>
                </div>
        </div>
    )
}
export default Person
