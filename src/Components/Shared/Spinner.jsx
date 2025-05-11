import React from "react";
import { RingLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div>
      <RingLoader className="mx-auto" color="#fdb441" size={83} />
    </div>
  );
};

export default Spinner;
