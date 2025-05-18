import React from 'react';
import { useGetCountCharts } from '@/hooks/useGetCountChart';

export default function MitigatedAttacks() {
 
 const {data: countChartData,isFetching} = useGetCountCharts();
   const count = countChartData?.data?.count;

  return (
    <div className='bg-[#0F172A] text-[#FFFFFF] p-10 shadow-md w-full max-w-xs border border-[#1E293B]'>
      <div className="flex flex-col items-center justify-center gap-4 font-medium">
        {/* Icon */}
          <div>
            {isFetching ? (
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#78FF97] flex items-center justify-center text-sm font-medium">
              </div>
            ) : count != null ? (
              <div className='text-4xl font-bold text-[#78FF97]'>
                {count}
              </div>
            ) : (
              <div className='text-sm text-red-500'>
                Failed to load
              </div>
            )}
          </div>
          <div className="text-lg text-white font-normal">
            Number Of <span className="underline text-[#504CA6]">Mitigated</span> Attacks
          </div>
      </div>
    </div>
  )
}
