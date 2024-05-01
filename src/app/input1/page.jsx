'use client'
import React, { useState } from "react";
import Papa from "papaparse";
import { useRouter } from "next/navigation";
import useUploadStore from "@/utils/state";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { LuUpload } from "react-icons/lu";

const Page = () => {
  const [text, setText] = useState('Click or drag and drop file here');
  const [disable, setDisable] = useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();
  const setParsedData = useUploadStore((state) => state.setParsedData);

  const handleFile = (e) => {
    const csv_file = e.target.files[0];
    setText(csv_file.name); // Set text to file name
    parseCsvFile(csv_file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    setText(file.name); // Set text to file name
    parseCsvFile(file);
  };

  const parseCsvFile = (file) => {
    Papa.parse(file, {
      complete: (results) => {
        console.log(results);
        setDisable(false);
        setParsedData(results);
        setData(results.data);
      },
    });
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-4 sm:mx-0">
      <div className="mb-3 w-96">
        <div
          className="flex items-center justify-center p-6 m-auto border-black w-96 h-52 border-dashed border-[1px] rounded-lg"
          style={{ borderColor: "black" }}
          onDrop={handleDrop}
          onDragOver={dragOverHandler}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <LuUpload className="text-center" size={25} />
            <input
              className="hidden"
              type="file"
              accept=".csv"
              onChange={handleFile}
              id="fileInput"
            />
            <label htmlFor="fileInput" className="text-center cursor-pointer">
              {text}
            </label>
            <h1 className="-mt-3 text-xs">
            select current months
            </h1>
          </div>
        </div>
      </div>

      <div className="text-center">
        {disable ? (
            <div className="flex gap-4">
          <button
            className="border-[1px] p-3  rounded-md bg-black text-white"
             onClick={()=>{
                router.push('/input')
            }}
          >
            Back
          </button>
          <button
          className="border-[1px] p-3 disabled:cursor-not-allowed rounded-md bg-gray-300 text-gray-700"
          disabled
        >
          Continue
        </button>
        </div>
        ) : (
          <div>
            <button
              className="border-[1px] p-3 rounded-md bg-black text-white"
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Continue
            </button>
            {data && (
              <Table>
                <TableBody>
                  {data.map((items, index) => (
                    <TableRow key={index}>
                      {items.map((item, i) => (
                        <TableCell key={i}>{item}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
