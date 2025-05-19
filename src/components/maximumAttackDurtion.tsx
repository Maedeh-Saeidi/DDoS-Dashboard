import { useGetTimeDuration } from '@/hooks/useGetTimeDuration';
import { convertMsToTime } from '@/utils';
import SearchIcon from "@/assets/icons/search.svg";
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
    <div className='max-w-[45%] max-h-[12vh] min-w-[44%] flex flex-row gap-30  bg-[#0F172A] p-5 border border-[#1E293B]'>
    <div className='pl-[5%]'>
      <SearchIcon />
    </div>
     <div className='flex flex-row justify-center align-center gap-15'>
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
       <div className='min-w-[50%] flex flex-col justify-center pt-3'>
        <div className='text-[#78FF97] font-medium text-2xl'>Maximum <span className='block text-[#FFFFFF]'> Attack Duration</span>
        </div>
      </div>
     </div>
    </div>
  )
}
