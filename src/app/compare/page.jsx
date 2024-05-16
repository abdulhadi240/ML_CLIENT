'use client'
import { useState , useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import 'tailwindcss/tailwind.css';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

export default function page() {

  const barData = {
    labels: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'],
    datasets: [
      { label: 'Group A', data: [900, 300, 450, 50], backgroundColor: 'rgba(54, 162, 235, 0.6)' },
      { label: 'Group B', data: [300, 400, 350, 20], backgroundColor: 'rgba(75, 192, 192, 0.6)' },
      { label: 'Group C', data: [500, 200, 300, 15], backgroundColor: 'rgba(255, 206, 86, 0.6)' },
    ],
  };
  
  const lineData = {
    labels: ['Dec 23', 'Jan 24','Feb 24', 'Mar 24', 'Apr 24', 'May 24'],
    datasets: [
      { label: 'XG_Boost', data: [1600, 1500, 1400, 1500, 1600, 1700], borderColor: 'rgba(54, 162, 235, 0.6)', fill: false },
      { label: 'LSTM', data: [1400, 1450, 1500, 1600, 1550, 1650], borderColor: 'rgba(255, 99, 132, 0.6)', fill: false },
      { label: 'VAR', data: [1350, 1400, 1450, 1500, 1600, 1750], borderColor: 'rgba(255, 206, 86, 0.6)', fill: false },
    ],
  };


  const invoices = [
    {
      Capabilities: "General",
      Benchmark: "Calculated general response on unsettled dataset",
      XG_Boost: "90%",
      LSTM: "70%",
      VAR: "83%",
    },
    {
      Capabilities: "Timing",
      Benchmark: "Time taken to generate a response for each model",
      XG_Boost: "5s",
      LSTM: "8s",
      VAR: "10s",
    } ,
    {
      Capabilities: "Complex",
      Benchmark: "How the model reacts to a more complex dataset",
      XG_Boost: "50%",
      LSTM: "65%",
      VAR: "77%",
    } ,
    {
      Capabilities: "Accurate",
      Benchmark: "The accuracy of models in comparison to realtime data",
      XG_Boost: "81%",
      LSTM: "79%",
      VAR: "85%",
    } 
  ]
  
  const [bestModelIndex, setBestModelIndex] = useState([]);
  const [smallestTimeIndex, setSmallestTimeIndex] = useState(-1); // Initialize with -1 to indicate no smallest time found yet

  useEffect(() => {
    const findBestModelIndex = () => {
      const indexes = [];
      invoices.forEach((invoice) => {
        const values = Object.values(invoice).slice(2).map((value) =>
          parseFloat(value.replace('%', '').replace('s', '')) // Remove '%' and 's' from values for comparison
        );
        const maxIndex = values.indexOf(Math.max(...values));
        const minIndex = values.indexOf(Math.min(...values));
        indexes.push(maxIndex);
        if (invoice.Capabilities === "Timing" && minIndex !== -1) {
          setSmallestTimeIndex(minIndex);
        }
      });
      setBestModelIndex(indexes);
    };
    findBestModelIndex();
  }, []);

  return (
    <div className="container ">
      <h1 className="mb-4 text-2xl font-bold">Model Comparison</h1>
      <div className='flex justify-between'>
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="mb-2 text-xl font-semibold">Writing Contest: Entries</h2>
          <Bar data={barData}  height={400} width={550}/>
        </div>
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="mb-2 text-xl font-semibold">Time Trends(ms)</h2>
          <Line data={lineData}  height={400} width={550}/>
        </div>
      </div>
      <div className='p-24'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Benchmark</TableHead>
            <TableHead>Capabilities</TableHead>
            <TableHead className='text-blue-400'>LSTM</TableHead>
            <TableHead className="text-right">VAR</TableHead>
            <TableHead className="text-right">XG_Boost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice.Benchmark}>
              <TableCell>{invoice.Capabilities}</TableCell>
              <TableCell>{invoice.Benchmark}</TableCell>
              {/* Color the cell blue if it corresponds to the smallest time */}
              <TableCell style={{ color: index === smallestTimeIndex ? 'blue' : 'inherit' }}>
                {invoice.LSTM}
              </TableCell>
              <TableCell className="text-right" style={{ color: index === smallestTimeIndex ? 'blue' : 'inherit' }}>
                {invoice.VAR}
              </TableCell>
              <TableCell className="text-right" style={{ color: index === smallestTimeIndex ? 'blue' : 'inherit' }}>
                {invoice.XG_Boost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </div>
  );
}
