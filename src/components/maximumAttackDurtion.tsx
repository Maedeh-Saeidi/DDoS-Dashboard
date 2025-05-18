import { useGetTimeDuration } from '@/hooks/useGetTimeDuration';
import { convertMsToTime } from '@/utils';
import React from 'react';

export default function MaximumAttackDurtion() {
  const {data: duration, isFetching} = useGetTimeDuration();
  const durationInMs = duration?.data?.duration;
  const { days, hours, minutes } = convertMsToTime(durationInMs || 0);
  const timeItems = [
    { label: 'DAYS', value: isFetching ? '--' : days },
    { label: 'HOURS', value: isFetching ? '--' : hours },
    { label: 'MINUTES', value: isFetching ? '--' : minutes },
  ];

  return (
    <div className='max-h-[14vh] min-w-[44%] max-w-[45%] flex flex-row gap-5  bg-[#0F172A] p-5 border border-[#1E293B]'>
      {/* search svg */} 
     <div className='flex flex-row justify-center align-center gap-10'>
      <div className="flex justify-center align-center gap-3">
        {timeItems.map((item, index) => (
        <div className='flex flex-col gap-0 justify-center align-center text-center' key={index}>
          <div
          className="max-h-[55%] min-w-[15%] max-w-[85%] p-7 bg-[#1E293B] flex items-center justify-center rounded-md"
          >
          <div className="text-white text-3xl font-bold">{item.value}</div>
          </div>
          <div className="text-white text-sm mt-2 tracking-wide font-normal">{item.label}</div>
        </div>
        ))}
      </div>
       <div className='flex flex-col justify-center'>
        <div className='text-[#78FF97] font-medium text-2xl'>Maximum <span className='block text-[#FFFFFF]'> Attack Duration</span>
        </div>
      </div>
     </div>
    </div>
  )
}
