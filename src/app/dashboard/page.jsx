'use client'
import React from 'react'
import Revenue from '@/components/Revenue'
import Graph from '@/components/Graph'
import Dounut from '@/components/Dounut'
import Pie_chart from '@/components/Pie_chart'
import  Line_graph  from '@/components/Line_graph'
import  LineGraph_dash  from '@/components/Line_graph_dash'

import useUploadStore from "../../utils/state";
import {useUploadStore1} from "../../utils/state";
import Link from 'next/link'
import Image from 'next/image'
const page = () => {

const parsedData = useUploadStore((state) => state.parsedData);
const SalesData = useUploadStore1((state) => state.salesData);

console.log(SalesData);

  return (
    <><div className="flex justify-between mx-10 mt-3 overflow-hidden header">
      <Link href={'/'}><Image src={'/logo1.png'} height={140} width={140} alt='logo'/></Link>
          <Link href={'/working'}><button className='w-32 h-auto p-3 text-white bg-black rounded-md '>Continue</button></Link>
      </div><div className='flex flex-col gap-3 '>
              <div className='flex flex-col justify-center gap-2 sm:flex-row sm:justify-between sm:pr-16'>
                  <div className='flex flex-col gap-4 mt-4 sm:justify-normal'>
                      <Revenue current={parsedData?.data[1][2]} past={parsedData?.data[1][3]} text={'Revenue'} />
                      <Revenue current={parsedData?.data[1][4]} past={parsedData?.data[1][5]} text={'Expense'} />
                  </div>
                  <div className="speed  border-[1px] rounded-md mt-4">
                      <h1 className='flex flex-col justify-center pt-2 font-bold text-center sm:flex-row'>Overall Profit Margin</h1>
                      <div className='flex flex-col gap-3 sm:flex-row'>
                          <Graph value={61.09} color={'#ffff00'} heading={'Gross Profit Margin'} title={'Gross Profit'} number={parsedData?.data[1][6]} />
                          <Graph value={87.8} color={'#ff0000'} heading={'Net Profit Margin'} title={'Net Profit'} number={parsedData?.data[1][7]} />
                      </div>
                  </div>
                  <div className="flex flex-col gap-2 dounut">
                      <div className="balance mx-2 sm:mx-0 max-w-[500px] sm:w-72 h-auto p-4 text-center flex flex-col gap-1 items-center justify-center border-[1px] mt-4 rounded-md">
                          <h1 className='text-xs'>Outstanding Revenue</h1>
                          <h2>{parsedData?.data[1][8]}</h2>
                      </div>
                      
                  </div>
              </div>
              <div className='flex flex-col justify-center sm:flex-row sm:justify-normal'>
                  <div className="pie sm:w-[40%]  flex flex-col  border-[1px] p-4 mx-2">
                      <div className='mb-10 font-bold text-start'>
                          <h1>Production costs of materials </h1>
                          <p className='text-xs font-light'>Last 6 months</p>
                      </div>

                      <div className='flex items-center justify-center text-center h-72 w-80 sm:w-auto'>
                          <Pie_chart />
                      </div>
                  </div>
                  <div className="pie w-[100%] sm:w-[60%] flex flex-col border-[1px] sm:p-4 mx-2">
                      <LineGraph_dash revenue={SalesData} />
                  </div>
              </div>
          </div></>
  )
}

export default page