import React from 'react'
import './header.scss'
import list from '../../img/list.png'
import squares from '../../img/squares.png'
import refresh from '../../img/refresh.png'

const Header = () => {
    return (
        <div className='nav'>
            <div className="title">
            <span>Bit Persons</span>
            </div>
            <div className='icons'>
            <span className="about">About</span>
            <img src={refresh} alt="no-img" />
            {/* <img src={squares} alt="no-img" /> */}
            <img src={list} alt="no-img" />
            </div>
        </div>
    )
}

export default Header
