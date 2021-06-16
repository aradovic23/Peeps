import React from 'react'
import './header.scss'

import { MdRefresh } from "react-icons/md";
import { MdGridOn } from "react-icons/md";
import { MdGridOff } from "react-icons/md";


const Header = (props) => {
    const {refresh} = props
    const {grid} = props

   
    return (
        <div className='nav-wrap'>
        <div className='nav'>
            <div className="title">
            <h1>Bit People</h1>
            </div>
            <div className='icons'>
            <h4 className="about">About</h4>
            <span><MdRefresh onClick={refresh} fontSize='24px'/></span>
            <span><MdGridOn onClick={grid} fontSize='24px'/></span>
            <span><MdGridOff onClick={grid} fontSize='24px'/></span>
            </div>
        </div>
        </div>
    )
}

export default Header
