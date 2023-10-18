import React, { useState, useEffect } from 'react';

function Grainy() {


  return (
    <svg className="w-full absolute left-0 top-0 opacity-25 h-[100%] z-10">
      <filter id="grainy">
        <feTurbulence type="turbulence" baseFrequency={0.4} />
      </filter>
      <rect
        width="100%"
        height="100%"
        fill="blue"
        filter="url(#grainy)"
     
      />
    </svg>
  );
}

export default Grainy;
