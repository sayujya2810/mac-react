import React from 'react'
import "../Styles/Navbar.css"
import {DiApple} from "react-icons/di"
import {FaBatteryThreeQuarters} from "react-icons/fa"
import {BiWifi2} from "react-icons/bi"
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosSwitch} from "react-icons/io"
const Navbar = ({open, setOpen}) => {
  return (
    <div id='nav-main'>
        <div id='nav-left'>
            <DiApple className='hover' size={"25px"} />
            <p className='hover' style={{cursor:"pointer"}} onClick={() => setOpen(!open)}>Sayujya Malkan</p>
            <p className='hover'>File</p>
            <p className='hover'>View</p>
            <p className='hover'>Go</p>
            <p className='hover'>Tools</p>
            <p className='hover'>Window</p>
            <p className='hover'>Help</p>
        </div>
        <div id='nav-right'>
            <FaBatteryThreeQuarters className='hover' size={"20px"} />
            <BiWifi2 className='hover' size={"20px"} />
            <AiOutlineSearch className='hover' size={"20px"} />
            <IoIosSwitch className='hover' size={"20px"} />
            <p className='hover'>Tue Oct 18 9:41 AM</p>
        </div>
    </div>
  )
}

export default Navbar