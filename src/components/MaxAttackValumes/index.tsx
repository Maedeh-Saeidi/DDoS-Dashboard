import React from 'react';
import MaxVolumesBITS from './components/maxVolumesBits';
import MaxVolumesPackets from './components/maxVolumesPackets';

export default function MaxAttackValumes() {
  return (
    <div className='min-w-[50%] h-auto bg-amber-600 flex flex-row'>
      <div className='flex flex-row gap-0'>
        <MaxVolumesBITS/>
        <MaxVolumesPackets/>
      </div>
    </div>
  )
}
