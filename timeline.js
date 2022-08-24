import React from 'react';
const TimeLine = () => {
  return (
    <div>
      <div className={`flex gap-4 items-center`}>
        <div className={`flex-1 flex items-center`}>
          <div className={`bg-red-500 h-[50px] w-[50px] rounded-full`}></div>
        </div>
        <div className={`bg-[#C4C4C4] h-[2px] w-full`}></div>
        <div className={`flex-1 flex items-center`}>
          <div className={`bg-red-500 h-[50px] w-[50px] rounded-full`}></div>
        </div>
        <div className={`bg-[#C4C4C4] h-[2px] w-full`}></div>
        <div className={`flex-1 flex items-center`}>
          <div className={`bg-red-500 h-[50px] w-[50px] rounded-full`}></div>
        </div>
        <div className={`bg-[#C4C4C4] h-[2px] w-full`}></div>
        <div className={`flex-1 flex items-center`}>
          <div className={`bg-red-500 h-[50px] w-[50px] rounded-full`}></div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
