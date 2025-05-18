"use client"

import AttackCountCards from "@/components/AttackCountCard/index";
import TrafficFlowChart from "@/components/trafficFlowChart";
import MaxAttackValumes from "@/components/MaxAttackValumes";
import MaximumAttackDurtion from "@/components/maximumAttackDurtion";

export default function DashboardPage() {
  return (
    <>
    <main className="min-h-screen bg-[#0b1228] text-white p-6">
      {/* Add this to header */}
      <h1 className="text-3xl font-bold pb-7">TIC DDoS Radar</h1>
      {/* this is the main component */}
      <p className="text-base leading-7px font-Weight-500 max-w-[60%]">
        The Radar report has been extracted from the data of the <span className="underline text-[#78FF97] px-2">SIWAN</span> DDoS detection and Mitigation system, which has been deployed and operated by the TIC company as the country's defense shield, providing effective protection against attacks.
      </p>
      <div className="flex flex-row flex-wrap justify-start pt-10 gap-5">
      <AttackCountCards/>
      <MaxAttackValumes/>
      <TrafficFlowChart/>
      <MaximumAttackDurtion/>
         </div>
    </main>
    </>
  );
};