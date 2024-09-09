import {DataTable} from "@/components/ui/data-table";
import AnalyticsCard from "@/components/dashboard/analytics-card";
import {Button} from "@/components/ui/button";

import {columns} from "./columns";
import {ProductsDummyData} from "@/constants/data";

export default async function page() {
  return (
    <div className="p-6">
      <AnalyticsCard
        title="Customers"
        subTitle="Showing all customers with orders">
        <Button className="mb-3">Add New Customer</Button>
        <DataTable columns={columns} data={ProductsDummyData} />
      </AnalyticsCard>
    </div>
  );
}
