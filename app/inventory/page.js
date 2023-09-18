"use client"

import React, { useState } from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ResultContainerPlugin from './ResultContainerPlugin.jsx';

export default function Page() {
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult);
        setDecodedResults(prev => [...prev, decodedResult]);
    };

    return (
        <div className="inventory">
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
            <ResultContainerPlugin results={decodedResults} />
        </div>
    );
};