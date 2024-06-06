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


  const predicted_model_1 = {
    Data: [7301, 8145, 9518, 5496, 10292, 8967, 5210, 1211, 8119, 8643, 10569, 1482, 8253, 8594, 8478, 4929, 7448, 10425, 10642, 9421, 9221, 6124, 8459, 5389, 7891, 9453, 9234, 6049, 6345, 7935]
  };

  const predicted_model_2 = {
    Data: [8491,9834,7756,9823,7349,8621,9567,7329,5489,7623,8756,9825,7358,7469,8652,5482,7391,
      9589,9827,8763,8673,5349,
      7745,4585,7273,8766,8699,5526,5658,7422,8699,7273,7422]
  };

  const predicted_model_3 = {
    Data: [5343,
    6630,
    8529,
    4370,
    9556,
    8347,
    4995,
    1088,
    7468,
    7546,
    9836,
    1037,
    7509,
    7506,
    7355,
    3263,
    7069,
    9588,
    9821,
    8751,
    8659,
    5321,
    7728,
    4568,
    7248,
    8752,
    8675,
    5486,
    5622,
    7398,
    7398
  ]
  };

  
  const lineData = {
    labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
    datasets: [
      { label: 'XG_Boost', data: predicted_model_1.Data, borderColor: 'rgba(54, 162, 235, 0.6)', fill: false },
      { label: 'LSTM', data: predicted_model_2.Data, borderColor: 'rgba(255, 99, 132, 0.6)', fill: false },
      { label: 'VAR', data: predicted_model_3.Data, borderColor: 'rgba(255, 206, 86, 0.6)', fill: false },
    ],
  };


  const invoices = [
    {
      Capabilities: "Timing",
      Benchmark: "Time taken to generate a response for each model",
      XG_Boost: "5s",
      LSTM: "8s",
      VAR: "10s",
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
      <div className='justify-between '>
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="mb-2 text-xl font-semibold">Time Trends(ms)</h2>
          <Line data={lineData}  height={400} width={550}/>
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
    </div>
  );
}
