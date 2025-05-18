
import React from 'react';
import MitigatedAttacks from './components/mitigatedAttacks';

export default function AttackCountCards() {

  return (
    <div className='min-w-[50%] h-auto bg-amber-600'>
      <div className="bg-[#0F172A] text-[#FFFFFF] p-10 shadow-md w-full max-w-xs border border-[#1E293B]">
        {/* component */}
        <MitigatedAttacks />
      </div>
    </div>
  )
}
