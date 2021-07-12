import React from 'react'
import './header.scss'

import { MdRefresh, MdGridOn, MdGridOff, MdLocalLibrary } from "react-icons/md";



const Header = ({refresh, grid, swap}) => {
 
   
    return (
        <div className='nav-wrap'>
        <div className='nav'>
            <div className="title">
            <h1> <MdLocalLibrary/> Peeps</h1>
            </div>
            <div className='icons'>
            {swap === true ? <span><MdGridOn onClick={grid} fontSize='24px'/></span>:<span><MdGridOff onClick={grid} fontSize='24px'/></span>}
            <span><MdRefresh onClick={refresh} fontSize='24px'/></span>
            </div>
        </div>
        </div>
    )
}

export default Header
