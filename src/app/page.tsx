"use client"

import AttackCountCards from "@/components/AttackCountCard";
import TrafficFlowChart from "@/components/trafficFlowChart";
import MaximumAttacksValumes from "@/components/maximumAttacksValumes";
import MaximumAttackDurtion from "@/components/maximumAttackDurtion";

export default function DashboardPage() {
  return (
    <>
    <main className="min-h-screen bg-[#0b1228] text-white p-6">
      {/* Add this to header */}
      <h1 className="text-2xl font-bold">TIC DDoS Radar</h1>
      {/* this is the main component */}
      <p className="text-sm leading-5px font-Weight-500 max-w-[50%]">
        The Radar report has been extracted from the data of the DDoS detection and Mitigation system, which has been deployed and operated by the TIC company as the country's defense shield, providing effective protection against attacks.
      </p>
      <div className="flex flex-row flex-wrap justify-start pt-10">
      <AttackCountCards/>
      <TrafficFlowChart/>
      <MaximumAttacksValumes/>
      <MaximumAttackDurtion/>
         </div>
    </main>
    </>
  );
};

