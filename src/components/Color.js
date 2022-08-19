import React, { useEffect, useRef, useState } from 'react'
import "./Color.css"

function Color() {
    const[color,setColor]=useState("red")
    const refDiv=useRef(null)
    useEffect(()=>{
        setInterval(()=>{
            if(color==='red'){
            refDiv.current.style.background = color;
                setColor("green")
            }
            if(color==="green"){
                refDiv.current.style.background = color;
                setColor("red")
            }
        },1000)
    },[color])
  return (
    <div ref={refDiv} className='color'></div>
  )
}

export default Color
