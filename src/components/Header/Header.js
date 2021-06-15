import React from 'react'
import './header.scss'

import { MdRefresh } from "react-icons/md";
import { MdList } from "react-icons/md";

const Header = () => {
    return (
        <div className='nav-wrap'>
        <div className='nav'>
            <div className="title">
            <h1>Bit People</h1>
            </div>
            <div className='icons'>
            <h4 className="about">About</h4>
            <span><MdRefresh fontSize='24px'/></span>
            <span><MdList fontSize='24px'/></span>
            </div>
        </div>
        </div>
    )
}

export default Header
