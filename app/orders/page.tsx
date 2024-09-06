import AnalyticsCard from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ordersDummyData } from "@/constants/data";
import { columns } from "./columns";

export default function page() {
  return <AnalyticsCard title="products" subTitle="Showing All Products">
    <Button className="mb-3">Create New Order</Button>
    <DataTable columns={columns} data={ordersDummyData}></DataTable>
  </AnalyticsCard>;
}
