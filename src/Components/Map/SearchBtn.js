import React,{useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai' 

// export const UserContext=createContext();
const SearchBtn = () => {
  const [search,setSearch]=useState()
    const style={
        marginRight:'8px',
        fontSize:'1.2em',
        color:'gray'
    }
  return (
    <div className='search-btn d-flex align-items-center p-2 bg-white'>
      <AiOutlineSearch style={style}/>
      <input type='search' value={search} onChange={e=>setSearch(theSearch=>e.target.value)} className='input' style={style} placeholder='Search destination'/>
    </div>
  )
}

export default SearchBtn
