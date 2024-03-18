"use client";
import React, { useState } from "react";
import MyDocument from "@/components/MyDocument";
import Uploader from "@/components/Uploader";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import Signature from "@/components/Signature";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const HomePage = () => {
  const [uploadedFile, setUploadedFile] = useState<FileList | null>(null);

  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-black py-5'>Pdf Viewer</h1>
      <Uploader uploadedFile={uploadedFile} setUploadedFile={setUploadedFile} />
      <Signature />
      <MyDocument uploadedFile={uploadedFile} />
    </div>
  );
};

export default HomePage;
