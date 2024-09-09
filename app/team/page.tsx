import {fetchProducts} from "@/lib/data";
import AnalyticsCard from "../../components/dashboard/analytics-card";
import TeamCard from "../../components/teams/teams-card";
import TeamList from "../../components/teams/team-list";

export interface Team {
  isAdmin: boolean;
  name: string;
  image: string;
  isApproved: boolean;
  email: string;
}

async function getTeam(): Promise<Team[]> {
  const res = await fetchProducts();
  return res;
}

export default async function page() {
  const data = await getTeam();
  console.log("data", data);
  return (
    <AnalyticsCard title="team" subTitle="Approved and Unapproved">
      <div className="p-6">
        <TeamList data={data} />
      </div>
    </AnalyticsCard>
  );
}
