'use client'
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue Trends',
      },
    },
  };
  
  

  
  export default function Line_graph({revenue}) {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
    const data = {
      labels,
      datasets: [
        {
          label: 'Sales',
          data: revenue,
          borderColor: 'rgb(255, 99, 133)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        
      ]
    }
    return <Line options={options} data={data} />;
  }