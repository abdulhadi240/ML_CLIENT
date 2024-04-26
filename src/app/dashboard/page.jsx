'use client'
import React from 'react'
import Revenue from '@/components/Revenue'
import Graph from '@/components/Graph'
import Dounut from '@/components/Dounut'
import Pie_chart from '@/components/Pie_chart'
import  Line_graph  from '@/components/Line_graph'
import useUploadStore from "../../utils/state";
const page = () => {

const parsedData = useUploadStore((state) => state.parsedData);
console.log(parsedData);


  return (
    <div className='flex flex-col gap-3 '>
    <div className='flex gap-2'>
    <div className='flex flex-col gap-4 mt-4'>
        <Revenue current={parsedData?.data[1][2]} past={51.25} text={'Revenue'}/>
        <Revenue current={parsedData?.data[1][3]} past={9.02} text={'Expense'}/>

    </div>
    <div className="speed  border-[1px] rounded-md mt-4">
        <h1 className='flex justify-center pt-2 font-bold text-center'>Overall Profit Margin</h1>
        <div className='flex gap-3'>
        <Graph value={parsedData?.data[1][4]} color={'#ffff00'} heading={'Gross Profit Margin'} title={'Gross Profit'} number={'327,535'}/>
        <Graph value={parsedData?.data[1][5]} color={'#ff0000'} heading={'Net Profit Margin'} title={'Net Profit'} number={'219,960'}/>
        </div>
    </div>
    <div className="flex flex-col gap-2 dounut">
        <div className="balance w-72 h-auto p-4 text-center flex flex-col gap-1 items-center justify-center border-[1px] mt-4 rounded-md">
            <h1 className='text-xs'>Outstanding Revenue</h1>
            <h2>${parsedData?.data[1][6]}K</h2>
        </div>
        <div className="graph border-[1px] rounded-md h-72">
            <Dounut/>
        </div>
    </div>
    </div>
    <div className='flex'>
    <div className="pie w-[40%]  flex flex-col  border-[1px] p-4 mx-2">
        <div className='mb-10 font-bold text-start'>
            <h1>Top 5 Expenses by Category</h1>
            <p className='text-xs font-light'>Last 6 months</p>
        </div>
        
        <div className='flex items-center justify-center text-center h-72'>
        <Pie_chart/>
        </div>
    </div>
    <div className="pie w-[60%]  flex flex-col  border-[1px] p-4 mx-2">
        <Line_graph revenue ={parsedData?.data[1][2]}/>
    </div>
    </div>
    </div>
  )
}

export default page