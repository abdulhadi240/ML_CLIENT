'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Actual_Line_Graph } from './Actual_Line_Graph'
import { Monthly_Line_Graph } from './Monthly_Line_Graph'

const Line_graph_line = ({actual , predicted}) => {
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
            <Actual_Line_Graph actual={actual} predicted={predicted}/>
        </div>
    )
}

export default Line_graph_line
