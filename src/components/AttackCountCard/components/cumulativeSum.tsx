import React from 'react'
import BillionPackets from './billionPackets'

export default function CumulativeSum() {
  return (
    <div className='bg-[#0F172A] text-[#FFFFFF] p-10 shadow-md w-full max-w-xs border border-[#1E293B]'>
      <p className='font-semibold text-sm'> Cumulative Sum of Mitigated DDoS Attacks</p>
      <div className='flex flex-row items-center justify-center'>
       {/* first component */}
       <BillionPackets/>
       {/* second component */}
      </div>
    </div>
  )
}
