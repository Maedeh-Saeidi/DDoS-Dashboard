import { useGetChart } from '@/hooks/useGetChart'
import React from 'react'

export default function TrafficFlowChart() {
  const {data} = useGetChart();
  console.log(data)
  return (
    <div className='min-w-[44%] max-w-[50%] h-auto bg-[#0F172A] flex flex-col p-6'>
      <div className='flex flex-row justify-between'>
        <div className='font-semibold text-2xl '>
          Traffic Flow Chart
        </div>
        {/* buttons in top right */}
      </div>
      {/* chart */}
      <></>
    </div>
  )
}
