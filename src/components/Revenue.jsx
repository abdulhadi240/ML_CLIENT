'use client'
import React, { useState, useEffect } from 'react';
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
const Revenue = ({ current, past , text }) => {
  const [percentage, setPercentage] = useState(0);
  const [increase, setIncrease] = useState(false);

  useEffect(() => {
    const calculatePercentage = (current, past) => {
      let percent = (current / past) * 100;
      percent = percent.toFixed(2)
      if(percent > 100) {
        percent = percent - 100
        percent = percent.toFixed(2)
        setIncrease(true)
        setPercentage(percent)
      }
      else{
        setIncrease(false)
        setPercentage(percent)
      }
      }
    calculatePercentage(current, past);
  }, [current, past]);

  return (
    <div className='border-[1px] overflow-hidden mx-2 max-w-[600px] sm:w-64 rounded-md pt-7 h-44 flex flex-col gap-6 relative items-center text-center '>
      <div className="text-xl font-bold percentage">
        <div className='flex '>
        <div>
            {increase ? <GoTriangleUp color='green' size={25}/> : <GoTriangleDown size={25} color='red'/>}
        </div>
        <p>{percentage}%</p>
      </div>
      <p className='text-xs font-light text-center '>{text}</p>
      </div>
      
      <div className='flex gap-4'>
        <div className="current">
          <h1>${current}</h1>
          <p className='text-xs'>This Month</p>
        </div> 
        <div className="vertical-line"></div> {/* Vertical line */}
        <div className="past">
          <h1>${past}</h1>
          <p className='text-xs'>Last Month</p>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
