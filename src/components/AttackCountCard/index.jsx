
import React from 'react';
import MitigatedAttacks from './components/mitigatedAttacks';
import CumulativeSum from './components/cumulativeSum';

export default function AttackCountCards() {

  return (
    <div className='min-w-[50%] h-auto bg-amber-600 flex flex-row'>
      <MitigatedAttacks />
      <CumulativeSum />
    </div>
  )
};
