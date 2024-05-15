// pages/index.js or pages/dashboard.js
import Head from 'next/head';
import { Actual_Line_Graph } from '@/components/Actual_Line_Graph';
import { Bar_graph } from '@/components/Bar_graph';
import Line_graph_line from '@/components/Line_graph_line';
import Revenue from '@/components/Revenue';
import Errors from '@/components/Errors';
import Dounut from '@/components/Dounut';
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Monthly Sales Forecast Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8">
        <h1 className="mb-6 text-2xl font-bold">Information technology company monthly sales forecast dashboard</h1>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-2 text-lg font-semibold">Net Sales by Customer</h2>
            <Bar_graph />
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-2 text-lg font-semibold">Variance - Actual vs Forecast</h2>
            <div className='flex justify-between'>
            <Errors />
            <Errors />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-white rounded-lg shadow-md h-96">
            <h2 className="mb-2 text-lg font-semibold">Total Net Sales per Revised market for Actual</h2>
            <Dounut />
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-2 text-lg font-semibold">Net Sales Per Customer for Actual vs Forecast</h2>
            <Bar_graph />
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="mb-2 text-lg font-semibold">Total Net Sales Per Time for Actual, Forecast</h2>
          <Line_graph_line />
        </div>
      </main>
    </div>
  );
}
