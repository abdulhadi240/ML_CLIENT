'use client'
import { useState } from 'react';

const page = () => {
    const [selectedState, setSelectedState] = useState('Yearly');

    const handleChange = (event) => {
        setSelectedState(event.target.value);
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <label htmlFor="stateDropdown" className="block text-gray-700">Select a state: </label>
                <select id="stateDropdown" value={selectedState} onChange={handleChange} className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="Yearly">Yearly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Weekly">Weekly</option>
                </select>
            </div>
            <div className="text-lg font-bold">{selectedState}</div>
        </div>
    );
};

export default page;
