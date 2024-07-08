// src/components/HoverDiv.js
import React, { useState } from 'react';

const HoverDiv = ({ data, index, handleHover }) => {
  return (
    <div
      className="flex flex-col p-4 w-full gap-2"
      onMouseEnter={() => handleHover(index)}
      onMouseLeave={() => handleHover(null)}
    >
      <div className='text-3xl font-bold' >{data.title}</div>
      <div className='leading-tight text-justify'>{data.content}</div>
    </div>
  );
};

export default HoverDiv;