'use client'
import React, { useState } from 'react'
import { Actual_Line_Graph } from './Actual_Line_Graph'
import { Monthly_Line_Graph } from './Monthly_Line_Graph'
const Line_graph_line = () => {
    const [month , setMonth] = useState(true)
  return (
    <div>
        <div className="flex gap-3 dropdown">
            <button className='border-[1px] p-3 w-auto h-auto' onClick={()=>{setMonth(true)}}>Monthly</button>
            <button className='border-[1px] p-3 w-auto h-auto' onClick={()=>{setMonth(false)}}>Yearly</button>
        </div>
        {month ? <div><Actual_Line_Graph/></div> : <div><Monthly_Line_Graph/></div>}
        
    </div>
  )
}

export default Line_graph_line