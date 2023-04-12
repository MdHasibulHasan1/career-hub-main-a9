import React from "react";

const setBanner = ({ children }) => {
  return (
    <div className="addBackground addBg -mt-16 h-64 bg-violet-100">
      <h3 className="text-3xl font-bold pt-20">{children}</h3>
    </div>
  );
};

export default setBanner;
