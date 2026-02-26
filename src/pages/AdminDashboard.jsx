import React from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import DashboardHeader from "../components/DashboardHeader";
import LiveMatchesCard from "../components/LiveMatchesCard";
import PendingReviews from "../components/PendingReviews";
import RecentActivity from "../components/RecentActivity";
import "../index.css";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-background-light text-slate-900">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader/>
        <div className="p-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              icon="sports_score"
              backgroundClass="bg-primary/10"
              colorClass="text-primary"
              title="Total Matches Today"
              value="24"
              subtitle="+5 from yesterday"
              subIcon="trending_up"
            />
            <StatCard
              icon="person_celebrate"
              backgroundClass="bg-secondary/10"
              colorClass="text-secondary"
              title="Active Users"
              value="1,284"
              subtitle="Real-time active"
              subIcon="sensors"
            />
            <StatCard
              icon="pending_actions"
              backgroundClass="bg-amber-500/10"
              colorClass="text-amber-500"
              title="Pending Announcements"
              value="03"
              subtitle="Requires approval"
              subIcon="pending_actions"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <LiveMatchesCard />
                  <PendingReviews />
                </div>
                
                <div className="lg:col-span-1">
                  <RecentActivity />
                </div>
          </div>
        </div>
      </main>
    </div>);
};

export default AdminDashboard;

