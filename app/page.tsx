import Summary from "@/components/dashboard/summary";
import BarGraph from "@/components/dashboard/bar-chart";
import RadarGraph from "@/components/dashboard/radar-chart";
import PieGraph from "@/components/dashboard/pie-chart";
import {TopProducts} from "@/components/dashboard/top-products";
import {HorizontalGraph} from "@/components/dashboard/horizontal-bar-chart";
import {TopCustomers} from "@/components/dashboard/top-customers";
import {fetchUsers} from "@/lib/data";
import {Customers} from "@/components/dashboard/top-customers";
import {redirect} from "next/navigation";
import {auth} from "@/server/auth";
async function getCustomers(): Promise<Customers[]> {
  const res = await fetchUsers();
  return res;
}

export default async function Home() {
  const session = await auth();
  // CHECK IF A USER IS SIGNED IN

  if (!session) {
    redirect("/login");
  }
  const data = await getCustomers();

  const topCustomers = data.sort((a, b) => b.orders - a.orders).slice(0, 4);

  return (
    <div className="p-4 grid gap-5">
      <Summary />
      <div className="grid lg:grid-cols-2 gap-10">
        <BarGraph />
        <RadarGraph />
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <TopProducts />
        <PieGraph />
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <HorizontalGraph />
        <TopCustomers data={topCustomers} />
      </div>
    </div>
  );
}
