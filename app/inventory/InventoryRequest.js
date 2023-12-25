// 'use server'

import { getAllReports } from "@/services/getReports";

export default async function InventoryRequest({ JWT }) {
    const inventoryRequest = await getAllReports(JWT);

    return (
        <div className="report_list">
            {inventoryRequest.data.map(report => (
                <div>{console.log(report)}</div>
            ))}
        </div>
    );
}