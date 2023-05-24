import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const Tab7: React.FC = () => {
  const [qrResult, setQrResult] = useState('');

  const handleScan = (result: string | null) => {
    if (result) {
      setQrResult(result);
    }
  };

  const handleError = (error: any) => {
    console.log(error);
  };

  return (
    <div>
      <h1>Tab 7</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>Resultado: {qrResult}</p>
    </div>
  );
};

export default Tab7;
