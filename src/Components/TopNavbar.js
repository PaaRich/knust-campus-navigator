import React from 'react'
import {GiCompass} from 'react-icons/gi'

const TopNavbar = () => {
  const styles={
    color:'blue',
    fontSize:'1.8em'
  }
  return (
    <div className='top_navbar d-flex align-items-center py-2 px-5'>

      <GiCompass style={styles}/>
      <h3 className='mb-0 ms-2'>Plugmap KNUST</h3>
      <div>

      </div>
    </div>
  )
}

export default TopNavbar
