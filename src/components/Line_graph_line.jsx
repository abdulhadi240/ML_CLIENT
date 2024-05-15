'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Actual_Line_Graph } from './Actual_Line_Graph'
import { Monthly_Line_Graph } from './Monthly_Line_Graph'

const Line_graph_line = ({data1}) => {
    const [month, setMonth] = useState(true)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const handleMouseEnter = () => {
        setDropdownOpen(true)
    }

    const handleMouseLeave = () => {
        setDropdownOpen(false)
    }

    const handleSelect = (isMonth) => {
        setMonth(isMonth)
        setDropdownOpen(false)
    }

    return (
        <div>
            <div 
                className="absolute inline-block text-sm transition-all right-10 text-center hover:border-[1px] hover:rounded-md"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center justify-between w-auto h-auto gap-3 p-3 cursor-pointer hover:transition-all hover:">
                    <span>{month ? 'Month' : 'Year'}</span>
                    <FontAwesomeIcon 
                        icon={dropdownOpen ? faChevronUp : faChevronDown} 
                        className="ml-2"
                        size='sm'
                    />
                </div>
                {dropdownOpen && (
                    <div 
                        className="z-10 w-24 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block"
                    >
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {month ? (
                                <button 
                                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100" 
                                    onClick={() => handleSelect(false)}
                                >
                                    Year
                                </button>
                            ) : (
                                <button 
                                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100" 
                                    onClick={() => handleSelect(true)}
                                >
                                    Month
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {month ? <div><Actual_Line_Graph data1={data1}/></div> : <div><Monthly_Line_Graph data1={data1}/></div>}
        </div>
    )
}

export default Line_graph_line
