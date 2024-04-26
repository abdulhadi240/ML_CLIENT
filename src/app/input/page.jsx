'use client'
import React, { useState } from "react";
import Papa from "papaparse";
import { useRouter } from "next/navigation"; // Import `useRouter` from 'next/router'
import useUploadStore from "@/utils/state"

const Page = () => {
  const [disable, setDisable] = useState(true);
  const router = useRouter(); // Use `useRouter` hook to access the router object
  const setParsedData = useUploadStore((state) => state.setParsedData);


  const handleFile = (e) => {
    const csv_file = e.target.files[0];
    Papa.parse(csv_file, {
      complete: (results) => {
        console.log(results);
        setDisable(false);
        setParsedData(results);
      },
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mb-3 w-96">
        <label htmlFor="formFile" className="inline-block mb-2 text-gray-700 form-label"></label>
        <input
          className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="file"
          id="formFile"
          accept=".csv"
          onChange={handleFile} // Corrected function name to `handleFile`
        />
        <div className="items-center mt-5 text-center justfiy-center ">
          {disable ? (
            <button className="border-[1px] p-3 disabled:cursor-not-allowed rounded-md bg-black text-white" disabled>
              Choose the File
            </button>
          ) : (
            <button
              className="border-[1px] p-3 disabled:cursor-not-allowed rounded-md bg-black text-white"
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
