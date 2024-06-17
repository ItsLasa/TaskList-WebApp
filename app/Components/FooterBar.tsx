import React from "react";

function FooterBar() {

  
  return (
    <div className="ml-2 mr-3 flex justify-between items-center mt-6 gap-6 text-[12px] p-1">
      <div className="flex gap-2 items-center justify-center">
        <div className="text-blue-600 text-[17px] font-bold">4</div>
        <div className="font-light text-[15px]">Items Left</div>
      </div>

      <div className="text-blue-500 text-[17px] transition-all duration-100  hover:font-semibold select-none cursor-pointer  ">
        Clear All Tasks

      </div>
    </div>
  );
}

export default FooterBar;
