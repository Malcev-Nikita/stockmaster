"use client"


import Image from 'next/image'

import { BsPencil } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Html5QrcodeSupportedFormats } from 'html5-qrcode';

import QrCodeReader from './qrcode';


export default async function Page() {
    const onNewScanResult = (decodedText, decodedResult) => {
        // handle decoded results here
    };

    return (
        <div className='inventory'>
            <QrCodeReader fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
                />
        </div>
    )
}
