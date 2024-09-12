import {fetchProducts} from "@/lib/data";
import AnalyticsCard from "../../components/dashboard/analytics-card";
import TeamCard from "../../components/teams/teams-card";
import TeamList from "../../components/teams/team-list";
import {TeamSchema} from "@/types/team-schema";
import {z} from "zod";
import {auth} from "@/server/auth";
import {User} from "@/lib/models";
import db from "@/server/db";
import redirect from "next/navigation";
import { getRoleStatus } from "@/server/actions/get-role-status";
// export interface Team {
//   isAdmin: boolean;
//   name: string;
//   image: string;
//   isApproved: boolean;
//   email: string;
// }

// async function getTeam(): Promise<Team[]> {
//   const res = await fetchProducts();
//   return res;
// }
export type Team = z.infer<typeof TeamSchema>;
export default async function page() {
  await db();
  const team = await User.find();
  const session = await auth();
  const role = await getRoleStatus();
  if (!session) {
    redirect("/login")
  }
  // console.log("data", data);
  return (
    <AnalyticsCard title="Team" subTitle="Approved Member and Pending Member">
      <div className="p-6">
        <TeamList data={team} role={role!} />
      </div>
    </AnalyticsCard>
  );
}
