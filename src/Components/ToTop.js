import React,{useState,useEffect} from 'react'

const ToTop = () => {
    const [displayBtn,setDisplayBtn]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>window.scrollY>600
        ?setDisplayBtn(true)
        :setDisplayBtn(false)
    )},[])

  return (
    <div
        className={`to-top p-2  ${displayBtn? 'opct1':'opct0'}`}
        onClick={()=>window.scrollTo(
        {
            top:0,
            behavior:'auto'
        }
    )}>
        <p className='mb-0 fw-bold text-white'>Top</p>
    </div>
  )
}

export default ToTop
