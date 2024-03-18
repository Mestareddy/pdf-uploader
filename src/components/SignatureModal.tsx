"use client";
// SignatureModal.tsx
import React from "react";
import SignatureCanvas from "./SignatureCanvas";

interface SignatureModalProps {
  onCancel: () => void;
  onAccept: (signatureDataUrl: string) => void;
}

const SignatureModal: React.FC<SignatureModalProps> = ({
  onCancel,
  onAccept,
}) => {
  const handleSignatureDrawn = (dataUrl: string) => {
    onAccept(dataUrl);
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <button onClick={onCancel}>Close</button>
        <SignatureCanvas onSignatureDrawn={handleSignatureDrawn} />
      </div>
    </div>
  );
};

export default SignatureModal;
