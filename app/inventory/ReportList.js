'use client'

export default async function DownloadFile(url) {
    document.querySelector('.download_report').href = url;
    document.querySelector('.download_report').download = url;
    document.querySelector('.download_report').click();
}   