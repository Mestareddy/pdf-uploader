"use client";
import Image from "next/image";
import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const Signature = () => {
  const [canvasData, setCanvasData] = useState<any>();
  const [canvasURL, setCanvasUrl] = useState<any>();

  const handleGenerate = () => {
    // console.log("");
    setCanvasUrl(canvasData.getTrimmedCanvas().toDataURL("image/png"));
  };

  const handleClear = () => {
    canvasData.clear();
  };

  //   console.log("canvasData", canvasData);
  //   console.log("canvasURL", canvasURL);

  return (
    <div className='border border-black my-5'>
      <SignatureCanvas
        penColor='green'
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
        // onEnd={onEndCanvasDrawing}
        ref={(ref) => setCanvasData(ref)}
      />
      <div className='flex my-3 gap-5 justify-center items-center'>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleGenerate}>Get Data Url</button>
      </div>
      <Image src={canvasURL} alt='' width={500} height={400} />
    </div>
  );
};

export default Signature;
