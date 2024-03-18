"use client";
// SignatureCanvas.tsx
import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";

interface SignatureCanvasProps {
  onSignatureDrawn: (dataUrl: string) => void;
}

const SignatureCanvas: React.FC<SignatureCanvasProps> = ({
  onSignatureDrawn,
}) => {
  const signatureRef = useRef<any>(null);

  const handleSave = () => {
    if (signatureRef.current) {
      const dataUrl = signatureRef.current.getTrimmedCanvas().toDataURL();
      onSignatureDrawn(dataUrl);
    }
  };

  const handleClear = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };

  return (
    <div>
      <SignaturePad
        ref={signatureRef}
        canvasProps={{ width: 500, height: 200 }}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default SignatureCanvas;
