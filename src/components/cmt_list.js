import React from "react";
import CMT from "./cmt";

const CMT_list = (props) => {
  const { cmt_arr } = props;
  // console.log(props);
  return (
    <div className="w-full px-[14px] md:px-[141px] ">
      {cmt_arr.map((cmt, index) => (
        <CMT key={index} cmt={cmt} />
      ))}
    </div>
  );
};

export default CMT_list;
