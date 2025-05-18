import { useGetSumLrl } from '@/hooks/useGetSumLrl';
import { convertNumbers } from '@/utils';
import React from 'react';

export default function PetaBytes() {
  const {data: sumPPSData,isFetching} = useGetSumLrl();
  const sum = sumPPSData?.data?.sum;
  return (
    <div className='bg-[#0F172A] text-[#FFFFFF] shadow-md w-full  border border-[#1E293B] p-5'>
      <div className='flex flex-col items-start justify-start'>
        <div className='font-medium text-[#78FF97] text-sm pt-1'>
        PETA BYTES
        </div>
         <div>
            {isFetching ? (
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#78FF97] flex items-center justify-center text-sm font-medium">
              </div>
            ) : sum != null ? (
              <div className='text-5xl font-bold text-[#FFFFFF]'>
                {convertNumbers(sum, "P")}
              </div>
            ) : (
              <div className='text-sm text-red-500'>
                Failed to load
              </div>
            )}
          </div>
        <div className="font-normal text-lg text-[#6B707E] pt-3 leading-7">
            Total Number of <span className="block underline">Dropped Bytes </span>
        </div>
      </div>
    </div>
  );
};
