import React from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import DashboardHeader from "../components/DashboardHeader";
import LiveMatchesCard from "../components/LiveMatchesCard";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-background-light text-slate-900">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader/>
        <div className="p-8 max-w-7xl mx-auto w-full">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              icon="sports_score"
              colorClass="text-primary"
              title="Total Matches Today"
              value="24"
              subtitle="+5 from yesterday"
            />
            <StatCard
              icon="person_celebrate"
              colorClass="text-secondary"
              title="Active Users"
              value="1,284"
              subtitle="Real-time active"
            />
            <StatCard
              icon="pending_actions"
              colorClass="text-amber-500"
              title="Pending Announcements"
              value="03"
              subtitle="Requires approval"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <LiveMatchesCard />
                </div>
          </div>
        </div>
      </main>
    </div>);
};

export default AdminDashboard;

