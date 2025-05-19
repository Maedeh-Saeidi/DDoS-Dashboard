import React from 'react';
import { convertNumbers } from '@/utils';
import {CommonLayoutsProps} from '@/types';

export default function CommonLayouts({title, subTitle, isFetching, maxVolume, maxUnit,volumes, volumesUnit,icon }:CommonLayoutsProps) {
  return (
    <div className='flex flex-col items-start justify-start gap-6 p-4'>
      <div className='flex flex-row gap-4'>
        <div className="w-12 h-12">{icon}</div>
        <div className='flex flex-col items-start justify-start '>
          <div className='font-semibold text-[#FFFFFF] text-2xl pt-1'>
            {title}
          </div>
          <div className='text-base text-[#343A4E] font-normal'>
            {subTitle}
          </div>
          </div>
      </div>
      <div className='flex flex-col gap-2'>
         {isFetching ? (
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#78FF97] flex items-center justify-center text-sm font-medium">
              </div>
            ) : maxVolume != null ? (
              <div className='text-5xl font-bold text-[#78FF97]'>
                {convertNumbers(maxVolume, maxUnit)}
                <span className='text-sm text-[#3A4053] px-3'>Gbps</span>
              </div>
            ) : (
              <div className='text-sm text-red-500'>
                Failed to load
              </div>
            )}
            <div className='text-xl font-normal'>
              Maximum Volume <br/> Of The<span className="underline text-[#504CA6] px-3">Mitigated</span>
              Attacks
            </div>
      </div>
      <div className='flex flex-row gap-2'>
        {isFetching ? (
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#FFFFFF] flex items-center justify-center text-sm font-medium">
              </div>
            ) : volumes?.length > 0 ? (
              <div className='flex flex-row gap-3'>
               {volumes?.map((vol: number, index: number) => (
                  <div key={index} className='px-2 py-1 text-base font-normal border border-[#CECFD4] rounded-md'>
                      {convertNumbers(vol, volumesUnit)}
                       <span className='text-sm text-[#CECFD4]'>Gbps</span>
                   </div>
                    ))}
              </div>
            ) : (
              <div className='text-sm text-red-500'>
                Failed to load
              </div>
            )}
      </div>
    </div>
  )
}
