import React from 'react';
import { useGetSumPPS } from '@/hooks/useGetSumPPS';
import { convertNumbers } from '@/utils';

export default function BillionPackets() {
  const {data: sumPPSData,isFetching} = useGetSumPPS();
  const sum = sumPPSData?.data?.sum;
  return (
    <div className='bg-[#0F172A] text-[#FFFFFF] shadow-md w-full border border-[#1E293B] p-5'>
      <div className='flex flex-col items-start justify-start '>
        <div className='font-medium text-[#78FF97] text-sm pt-1'>
        BILLION PACKETS
        </div>
         <div>
            {isFetching ? (
              <div className="animate-spin rounded-full h-8 w-8 border-t-10 border-b-2 border-[#3A4053] flex items-center justify-center text-sm font-medium">
              </div>
            ) : sum != null ? (
              <div className='text-5xl font-bold text-[#FFFFFF]'>
                {convertNumbers(sum, "G")}
              </div>
            ) : (
              <div className='text-sm text-red-500'>
                Failed to load
              </div>
            )}
          </div>
        <div className="font-normal text-lg text-[#6B707E] pt-3 leading-7">
            Total Number of <span className="block underline">Dropped Packets </span>
        </div>
      </div>
    </div>
  );
};
