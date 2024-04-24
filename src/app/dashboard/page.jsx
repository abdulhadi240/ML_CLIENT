import React from 'react'
import Revenue from '@/components/Revenue'
import Graph from '@/components/Graph'
import Dounut from '@/components/Dounut'
import Pie_chart from '@/components/Pie_chart'
import  Line_graph  from '@/components/Line_graph'
const page = () => {
  return (
    <div className='flex flex-col gap-3 '>
    <div className='flex gap-2'>
    <div className='mt-4 flex flex-col gap-4'>
        <Revenue current={65.54} past={51.25} text={'Revenue'}/>
        <Revenue current={2.59} past={9.02} text={'Expense'}/>

    </div>
    <div className="speed  border-[1px] rounded-md mt-4">
        <h1 className='flex justify-center text-center pt-2 font-bold'>Overall Profit Margin</h1>
        <div className='flex gap-3'>
        <Graph value={69.19} color={'#ffff00'} heading={'Gross Profit Margin'} title={'Gross Profit'} number={'327,535'}/>
        <Graph value={57.05} color={'#ff0000'} heading={'Net Profit Margin'} title={'Net Profit'} number={'219,960'}/>
        </div>
    </div>
    <div className="dounut flex flex-col gap-2">
        <div className="balance w-72 h-auto p-4 text-center flex flex-col gap-1 items-center justify-center border-[1px] mt-4 rounded-md">
            <h1 className='text-xs'>Outstanding Revenue</h1>
            <h2>$207,226</h2>
        </div>
        <div className="graph border-[1px] rounded-md h-72">
            <Dounut/>
        </div>
    </div>
    </div>
    <div className='flex'>
    <div className="pie w-[40%]  flex flex-col  border-[1px] p-4 mx-2">
        <div className='text-start mb-10 font-bold'>
            <h1>Top 5 Expenses by Category</h1>
            <p className='text-xs font-light'>Last 6 months</p>
        </div>
        
        <div className='text-center flex h-72 items-center justify-center'>
        <Pie_chart/>
        </div>
    </div>
    <div className="pie w-[60%]  flex flex-col  border-[1px] p-4 mx-2">
        <Line_graph/>
    </div>
    </div>
    </div>
  )
}

export default page