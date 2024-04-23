import React, { useState } from 'react'
import { NavLink } from 'reactstrap';
import {AiFillHome,AiOutlineSearch,AiOutlineMenu} from '../../../node_modules/react-icons/ai'
import {IoIosContact} from 'react-icons/io';
import {GrClose} from 'react-icons/gr'
import { GiCompass } from 'react-icons/gi';
import {BsFillTelephoneInboundFill} from 'react-icons/bs'



const NavbarSide = () => {
  const [open,setOpen]=useState(false)
 

  
  
  //styling react-icon
  const style={color:'white',fontSize:'1.8em'}
  
  const ctrlDisplay=()=>{
    return alert('Drag the Red markers to your desired destination or Click on the Route icon')
  }

  return (
    
    <div className={`${open&&'navbar-side-width'} navbar-side`}>
      <div className='d-flex align-items-center justify-content-around mt-3'>
        <div className={!open?'display':'d-flex align-items-center'}>
          <GiCompass style={style}/>
          <h3 className='ps-2'>PlugMap</h3>
        </div>
        <span 
          onClick={()=>setOpen(theOpen=>!theOpen)} 
        >
            {open?<GrClose className='close-btn text-black fs-2 fw-bold text-end'/>:<AiOutlineMenu className='menu-btn text-white fs-2 fw-bold text-end'/>}
        </span>
      </div>
      
      <div className='mt-3 navbar-side-links'>
        <a href='#home' className='d-flex align-items-center py-3'><AiFillHome className='home'/><h3 className={`${!open&&'display'} mb-0 ms-3`}>Home</h3></a>
        <NavLink to='#' onClick={ctrlDisplay} className='d-flex align-items-center py-3'><AiOutlineSearch className='search'/><h3 className={`${!open&&'display'} ms-3`}>Search</h3></NavLink>
        <a href='#about' className='d-flex align-items-center py-3'><IoIosContact className='contact'/><h3 className={`${!open&&'display'} ms-3`}>About</h3></a>
        <a href='#footer' className='d-flex align-items-center py-3'><BsFillTelephoneInboundFill className='contact'/><h3 className={`${!open&&'display'} ms-3`}>Contact</h3></a>
      </div>
    </div>
    
  )
}

export default NavbarSide
