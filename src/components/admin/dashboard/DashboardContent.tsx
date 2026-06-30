import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./StatsGrid";
import AlumniTable from "./AlumniTable";

export default function DashboardContent() {
  return (
    <div className="min-h-screen bg-slate-50">

      <DashboardHeader />

      <div className="space-y-10 p-8 lg:p-10">

        <StatsGrid />

        <AlumniTable />

      </div>

    </div>
  );
}