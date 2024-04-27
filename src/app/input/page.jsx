"use client";
import React, { useState } from "react";
import Papa from "papaparse";
import { useRouter } from "next/navigation"; // Import `useRouter` from 'next/router'
import useUploadStore from "@/utils/state";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const Page = () => {
  const [disable, setDisable] = useState(true);
  const [data , setData] = useState(null)
  const router = useRouter(); // Use `useRouter` hook to access the router object
  const setParsedData = useUploadStore((state) => state.setParsedData);

  const handleFile = (e) => {
    const csv_file = e.target.files[0];
    Papa.parse(csv_file, {
      complete: (results) => {
        console.log(results);
        setDisable(false);
        setParsedData(results);
        setData(results.data)
      },
    });
  };

  return (
    <><>
      <div className="mx-4 mt-4">
        <Image src={'/logo.png'} height={110} width={110} alt="logo" />
      </div>
    </><div className="flex items-center justify-center h-screen mx-4 sm:mx-0">
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="inline-block mb-2 text-gray-700 form-label"
          ></label>
          <input
            className={`form-control ${disable ? "-mt-0" : "-mt-44"}
          
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-dashed border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
            type="file"
            id="formFile"
            accept=".csv"
            onChange={handleFile} // Corrected function name to `handleFile`
          />
          <div className="items-center justify-center mt-5 text-center"> {/* Corrected typo in class name */}
            {disable ? (
              <button
                className="border-[1px] p-3 disabled:cursor-not-allowed rounded-md bg-black text-white"
                disabled
              >
                Choose the File
              </button>
            ) : (
              <div>
                <button
                  className="border-[1px] p-3 disabled:cursor-not-allowed rounded-md bg-black text-white"
                  onClick={() => {
                    router.push("/dashboard");
                  } }
                >
                  Continue
                </button>
                <Table>
                  <TableBody>
                    {data && data.map((items, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{items[0]}</TableCell>
                        <TableCell>{items[1]}</TableCell>
                        <TableCell>{items[2]}</TableCell>
                        <TableCell>{items[3]}</TableCell>
                        <TableCell>{items[4]}</TableCell>
                        <TableCell>{items[5]}</TableCell>
                        <TableCell className="text-right">{items[6]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div></>
  );
};

export default Page;
