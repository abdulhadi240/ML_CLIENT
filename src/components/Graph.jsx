'use client'
import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
const Graph = ({value , color , heading , title , number}) => {
  return (
    <div className='flex flex-col overflow-hidden gap-2 items-center text-center justify-center mt-4  p-4'>
        <h1 className='mb-2 font-semibold'>{heading}</h1>
        <ReactSpeedometer width={300} height={300} segments={1} maxValue={100} minValue={0}  value={value} needleColor={'black'} startColor={color} endColor={color} needleHeightRatio={0.4}/>
        <div className='-mt-28'>
        <h2 className='text-xs'>{title}</h2>
        <h1>${number}</h1>
        </div>
    </div>
  )
}

export default Graph