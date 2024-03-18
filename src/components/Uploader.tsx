"use client";
import React, { useState } from "react";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";

const Uploader = ({ uploadedFile, setUploadedFile }: any) => {
  const [fileTitle, setFileTitle] = useState<string>();

  const handleDownload = async () => {
    const data = new Blob(uploadedFile, { type: "application/pdf" });
    saveAs(data, fileTitle);

    console.log("uploadedFile", uploadedFile);
  };

  return (
    <div className='border border-green-500 rounded-lg flex flex-col justify-center items center gap-5 px-5 py-5'>
      <h1 className='text-black text-center'>Upload PDF in Next js</h1>
      <input
        type='text'
        onChange={(e) => setFileTitle(e.target.value)}
        className='border border-green-700 rounded-lg px-2'
        placeholder='Input the file name'
      />
      <input
        type='file'
        name=''
        id=''
        onChange={(e) => {
          const files = e.target.files;
          if (files) {
            setUploadedFile(files);
          }
        }}
        className='border border-black rounded-lg'
        prefix='Chhose File'
      />

      <button onClick={handleDownload} disabled={uploadedFile === null}>
        Download
      </button>
    </div>
  );
};

export default Uploader;
