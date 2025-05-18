import React from 'react';
import MaxVolumesBITS from './components/maxVolumesBits';
import MaxVolumesPackets from './components/maxVolumesPackets';

export default function MaxAttackValumes() {
  return (
    <div className='max-w-[50%] h-auto bg-[#0F172A] flex flex-row'>
        <MaxVolumesBITS/>
        <MaxVolumesPackets/>
    </div>
  )
}
