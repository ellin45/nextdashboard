import {DataTable} from "@/components/ui/data-table";
import AnalyticsCard from "@/components/dashboard/analytics-card";
import {Button} from "@/components/ui/button";
import {fetchUsers} from "@/lib/data";
import { topCustomersColumns } from "@/components/dashboard/top-customers";

async function getCustomers() {
  const res = await fetchUsers();
  return res;
}

export default async function page() {
  const data = await getCustomers();
  return (
    <section className="p-6">
      <AnalyticsCard
        title="Customers"
        subTitle="Showing all customers with orders">
        <Button className="mb-3">Add New Customer</Button>
        <DataTable columns={topCustomersColumns} data={data} />
      </AnalyticsCard>
    </section>
  );
}
