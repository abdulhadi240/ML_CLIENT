"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Actual_Line_Graph } from "@/components/Actual_Line_Graph";
import { Bar_graph } from "@/components/Bar_graph";
import Line_graph_line from "@/components/Line_graph_line";
import Revenue from "@/components/Revenue";
import Errors from "@/components/Errors";
import Dounut from "@/components/Dounut";
import useUploadStore from "../../utils/state";
import OpenAI from "openai";


const openai = new OpenAI({ apiKey: 'sk-proj-7YWO4G2s6QN88JwVHI7uT3BlbkFJUVvw7BTtbplZwFw0RtLO' ,dangerouslyAllowBrowser: true });


const Page = () => {
  const [selectedValue, setSelectedValue] = useState("XG_Boost"); // Initial selected value
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
  const [data_response, setData_Response] = useState(null);
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
        const completion = await openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant designed to output JSON..  as shown : {'data':[array of 30 values]}."
            },
            {
              role: "user",
              content: `${JSON.stringify(responseData)}. Use this to generate JSON output.`
            }
          ],
          model: "gpt-3.5-turbo-0125",
          response_format: { type: "json_object" }
        });
        const res = completion.choices[0].message.content
        setData_Response(res)
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [model]);

const values = [5000,4000,3000,6000,8000,9000,10000,5000,1000,9000]

  const actual = {
    Data: [
      5396,
5843,
6630,
8525,
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
7352,
3263,
7069,
9588,
8094,
8751,
8659,
6754,
7728,
4568,
7248,
4011,
8675,
5486,
5622,
7398,

    ],
  };

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
   
const parsedData = useUploadStore((state) => state.parsedData);
const salesArray = parsedData.data.slice(1, -1).map(entry => parseFloat(entry[2]));

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <Image src={"/logo.png"} height={100} width={100} alt="logo" />
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
          <h2 className="mb-2 text-lg font-semibold">
            Variance - Actual vs Forecast
          </h2>
          <div className="flex justify-between">
            {selectedValue === "XG_Boost" && <Errors actual={actual.Data} predicted={predicted_model_1.Data}/>}
            {selectedValue === "LSTM" && <Errors actual={actual.Data} predicted={predicted_model_2.Data}/>}
            {selectedValue === "Vector_Auto_Regression" && <Errors actual={actual.Data} predicted={predicted_model_3.Data}/>}
            {selectedValue === "XG_Boost" && <Errors actual={actual.Data} predicted={predicted_model_1.Data}/>}
            {selectedValue === "LSTM" && <Errors actual={actual.Data} predicted={predicted_model_2.Data}/>}
            {selectedValue === "Vector_Auto_Regression" && <Errors actual={actual.Data} predicted={predicted_model_3.Data}/>}
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
          {selectedValue === "XG_Boost" && <Bar_graph values={values}/>}
          {selectedValue === "LSTM" && <Bar_graph values={values}/>}
          {selectedValue === "Vector_Auto_Regression" && <Bar_graph values={values}/>}
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md">
        {/* Render Line_graph_line component if selected value is Component 1 */}
        {selectedValue === "XG_Boost" && (
          <Line_graph_line actual={actual.Data} predicted={predicted_model_1.Data} />
        )}
        {selectedValue === "LSTM" && (
          <Line_graph_line actual={actual.Data} predicted={predicted_model_2.Data} />
        )}
        {selectedValue === "Vector_Auto_Regression" && (
          <Line_graph_line actual={actual.Data} predicted={predicted_model_3.Data} />
        )}{" "}

        
      </div>
    </>
  );
};

export default Page;

