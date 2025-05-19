import React from 'react';
import CommonLayouts from './commonLayouts';
import Packets from "@/assets/icons/packets.svg";

export default function MaxVolumesPackets() {

  // برای این بخش url api call نبود
  // روی کامپوننت کناری یوآرال کامنت شده بود که برای همون کال کردم
  // منظورم این کامپوننت هست: MaxVolumesBITS
  // پس این بخش رو هارد کد می نویسم 


  const fakeVolumes: number[] = [
  18200000000,
  18000000000,
  17800000000,
  17500000000  
  ];
const maxVolume: number = 136500000000

   return (
    <div className='border border-[#1E293B] p-5 bg-[#0F172A]'>
      <CommonLayouts
        title='Maximum Attack Volumes'
        subTitle='PACKETS'
        isFetching={false}
        maxVolume={maxVolume}
        maxUnit='G'
        volumes={fakeVolumes}
        volumesUnit='G'
        icon={<Packets className="w-15 h-15"/>}
      />
    </div>
  )
}

