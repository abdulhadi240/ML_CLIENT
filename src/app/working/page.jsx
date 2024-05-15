"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Actual_Line_Graph } from "@/components/Actual_Line_Graph";
import { Bar_graph } from "@/components/Bar_graph";
import Line_graph_line from "@/components/Line_graph_line";
import Revenue from "@/components/Revenue";
import Errors from "@/components/Errors";
import Dounut from "@/components/Dounut";

const Page = () => {
  const [selectedValue, setSelectedValue] = useState("XG_Boost"); // Initial selected value
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [data, setData] = useState(null);
  const [model, setModel] = useState("XG_Boost");

  // Function to handle dropdown value change
  const handleDropdownChange = (value, newModel) => {
    setSelectedValue(value);
    setModel(newModel);
    setShowDropdown(false); // Hide dropdown after selecting a value
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ml-client-gen.onrender.com/api/v1/${model}`,
          {
            method: "POST",
          }
        );
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [model]);

  const jsonData = {
    Data: [
      531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545,
      546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560,
    ],
  };

  const jsonData1 = {
    Data: [
      631, 532, 533, 534, 535, 536, 87, 538, 539, 540, 541, 542, 543, 64, 545,
      546, 447, 548, 549, 550, 551, 552, 553, 554, 555, 556, 457, 558, 559, 560,
    ],
  };

  // Extracting the array
  const dataArray = jsonData.Data;
  const dataArray1 = jsonData1.Data;

  console.log(dataArray);

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <Image src={"/logo.png"} height={60} width={60} alt="logo" />
        <div className="inline-block right-6 ">
          {/* Dropdown */}
          <div
            className="inline-block "
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            {/* Selected value */}
            <button className="px-10 py-2 mx-4 text-white transition-colors bg-blue-500 border-none rounded-md shadow-md focus:outline-none hover:bg-blue-600">
              {selectedValue}
            </button>
            {/* Dropdown content */}
            {showDropdown && (
              <div className="absolute right-0 z-10 w-40 bg-white border border-gray-200 rounded-md shadow-lg ">
                <button
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 transition-colors hover:bg-gray-100"
                  onClick={() => handleDropdownChange("XG_Boost", "XG_Boost")}
                >
                  XG_Boost
                </button>
                <button
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 transition-colors hover:bg-gray-100"
                  onClick={() => handleDropdownChange("LSTM", "LSTM")}
                >
                  LSTM
                </button>
                <button
                  className="block w-full px-4 py-2 text-sm text-left text-gray-700 transition-colors hover:bg-gray-100"
                  onClick={() =>
                    handleDropdownChange(
                      "Vector_Auto_Regression",
                      "Vector_Auto_Regression"
                    )
                  }
                >
                  Vector_Auto_Regression
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="mb-2 text-lg font-semibold">Net Sales by Customer</h2>
          {selectedValue === "XG_Boost" && <Bar_graph />}
          {selectedValue === "LSTM" && <Bar_graph />}
          {selectedValue === "Vector_Auto_Regression" && <Bar_graph />}
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="mb-2 text-lg font-semibold">
            Variance - Actual vs Forecast
          </h2>
          <div className="flex justify-between">
            {selectedValue === "XG_Boost" && <Errors />}
            {selectedValue === "LSTM" && <Errors />}
            {selectedValue === "Vector_Auto_Regression" && <Errors />}
            {selectedValue === "XG_Boost" && <Errors />}
            {selectedValue === "LSTM" && <Errors />}
            {selectedValue === "Vector_Auto_Regression" && <Errors />}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Render Revenue component if selected value is Component 1 */}
        <div className="p-4 bg-white rounded-lg shadow-md h-96">
          <h2 className="mb-2 text-lg font-semibold">
            Total Net Sales per Revised market for Actual
          </h2>
          {selectedValue === "XG_Boost" && <Dounut />}
          {selectedValue === "LSTM" && <Dounut />}
          {selectedValue === "Vector_Auto_Regression" && <Dounut />}
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="mb-2 text-lg font-semibold">
            Net Sales Per Customer for Actual vs Forecast
          </h2>
          {selectedValue === "XG_Boost" && <Bar_graph />}
          {selectedValue === "LSTM" && <Bar_graph />}
          {selectedValue === "Vector_Auto_Regression" && <Bar_graph />}
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md">
        {/* Render Line_graph_line component if selected value is Component 1 */}
        {selectedValue === "XG_Boost" && (
          <Line_graph_line data1={dataArray} />
        )}
        {selectedValue === "LSTM" && (
          <Line_graph_line data1={dataArray1} />
        )}
        {selectedValue === "Vector_Auto_Regression" && (
          <Line_graph_line data1={dataArray} />
        )}{" "}
      </div>
    </>
  );
};

export default Page;
