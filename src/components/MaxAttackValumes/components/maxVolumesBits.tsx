import React from 'react';
import { useGetTopFiveLrl } from '@/hooks/useGetTopFiveLrl';
import CommonLayouts from './commonLayouts';

export default function MaxVolumesBITS() {
  const {data: topFiveLrlData,isFetching} = useGetTopFiveLrl();

  const topFiveLrl = topFiveLrlData?.data;
  const volumes: number[] | [] = Array.isArray(topFiveLrl)
    ? topFiveLrl.map((item) => Number(item?.value || 0))
    : [];
    const maxVolume: number | null = volumes.length > 0 ? Math.max(...volumes) : null;
  const volumesWithoutMax: number[] = volumes.filter((val, index, arr) => {
    const maxIndex = arr.indexOf(maxVolume!);
    return index !== maxIndex;
  });


  return (
    <div className='border border-[#1E293B] p-5'>
      <CommonLayouts
        title='Maximum Attack Volumes'
        subTitle='BITS'
        isFetching={isFetching}
        maxVolume={maxVolume}
        maxUnit='G'
        volumes={volumesWithoutMax}
        volumesUnit='G'
      />
    </div>
  )
}
