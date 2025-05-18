
import React from 'react';
import MitigatedAttacks from './components/mitigatedAttacks';
import CumulativeSum from './components/cumulativeSum';

export default function AttackCountCards() {

  return (
    <div className='max-w-[45%] h-auto bg-[#0F172A] flex flex-row'>
      <MitigatedAttacks />
      <CumulativeSum />
    </div>
  )
};
