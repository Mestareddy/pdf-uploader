"use client";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";

// Create Document Component
const MyDocument = ({ uploadedFile }: any) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className='bg-gray-500'>
      <Document
        file={uploadedFile && uploadedFile[0]}
        onLoadSuccess={onDocumentLoadSuccess}
        className='rounded-lg'
      >
        {Array.from(
          { length: numPages !== undefined ? numPages : 0 },
          (_, i) => (
            <div
              key={i + 1}
              className='w-full flex flex-col gap-3 items-end py-5 px-5'
            >
              <Page
                pageNumber={i + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className={"rounded-md"}
              />
              <p className='text-white'>
                Page {i + 1} of {numPages}
              </p>
            </div>
          )
        )}
      </Document>
      {/* <p>
        Page {pageNumber} of {numPages}
      </p> */}
    </div>
  );
};

export default MyDocument;
