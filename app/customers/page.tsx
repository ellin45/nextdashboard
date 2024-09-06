import {DataTable} from "@/components/ui/data-table";
import AnalyticsCard from "@/components/dashboard/analytics-card";
import {Button} from "@/components/ui/button";
import {fetchUsers} from "@/lib/data";
import {Customers} from "@/components/dashboard/top-customers";
import {columns} from "./columns";
async function getCustomers(): Promise<Customers[]> {
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
        <DataTable columns={columns} data={data} />
      </AnalyticsCard>
    </section>
  );
}
