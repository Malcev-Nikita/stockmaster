"use client"

import React, { useState } from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ResultContainerPlugin from './ResultContainerPlugin.jsx';
import CSVGenerator from './CSVGenerator.js';

export default function Page() {
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        setDecodedResults(prev => [...prev, decodedResult]);
    };

    return (
        <div className="inventory">
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
                rememberLastUsedCamera={false}
            />
            <ResultContainerPlugin results={decodedResults} />

            <button onClick={() => CSVGenerator()}>Сформировать отчёт</button>
        </div>
    );
};