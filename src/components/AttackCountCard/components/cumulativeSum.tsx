import React from 'react';
import BillionPackets from './billionPackets';
import PetaBytes from './petaBytes';

export default function CumulativeSum() {
  return (
    <div className='bg-[#0F172A] text-[#FFFFFF] p-4 shadow-md w-full border border-[#1E293B]'>
      <p className='font-semibold text-2xl py-5'> Cumulative Sum of Mitigated DDoS Attacks</p>
      <div className='flex flex-row items-center justify-center'>
       <BillionPackets/>
       <PetaBytes/>
      </div>
    </div>
  )
}
