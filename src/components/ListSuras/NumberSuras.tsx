import React from "react";
import { IOneSura } from "../../types/oneSura.types";

const NumberSuras = React.forwardRef(({ sura}<IOneSura[]>, ref) => {
  return (
    <div ref={ref} className="relative text-2xl flex items-center">
      <span className=" material-symbols-outlined text-7xl text-center absolute"></span>
      <span className=" text-lg text-center w-18">{sura.id}</span>
    </div>
  );
});

export default NumberSuras;
