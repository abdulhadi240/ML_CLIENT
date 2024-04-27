import { Actual_Line_Graph } from '@/components/Actual_Line_Graph'
import  Bar_graph  from '@/components/Bar_graph'
import Line_graph_line from '@/components/Line_graph_line'
import Revenue from '@/components/Revenue'
import Image from 'next/image'
import React from 'react'

const page = () => {

  return (
    <><div className='flex justify-between'>
      <Image src={'/logo.png'} height={60} width={60} alt='logo'/>
      <div>
        <button>See Comparasion</button>
        <div>
          
        </div>
      </div>

    </div><div className='flex flex-col gap-3 mx-1 mt-1'>
        <div className='flex gap-3'>
          <div className="bar h-[50%] w-[38%] border-[1px] p-2">
            <Bar_graph />
          </div>
          <div className="variance">
            <Revenue current={65.54} past={51.25} text={'Revenue'} />
          </div>
          <div className="error">
            <Revenue current={65.54} past={51.25} text={'Revenue'} />
          </div>
        </div>
        <div className="actual w-[50%]">
          <Line_graph_line />
        </div>
      </div></>
  )
}

export default page